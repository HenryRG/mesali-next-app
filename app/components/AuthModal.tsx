"use client"

import { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs';
import useAuth from '@/hooks/useAuth';
import { AuthenticationContext } from '../context/AuthContext';
import { Alert } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}: {isSignin: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {loading, error, data} = useContext(AuthenticationContext)
  const { signin } = useAuth()

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    verifyPassword: ""
  })                    
  
  const [disabled, setDisabled] = useState(true);
  
  useEffect(()=>{
    if(isSignin){
      if(inputs.email && inputs.password){
        return setDisabled(false)
      } 
    } else{
      if(inputs.email && inputs.password && 
        inputs.verifyPassword && inputs.firstName && 
        inputs.lastName && inputs.city && inputs.phone){
          return setDisabled(false)
        }
    }

    setDisabled(true)
  }, [inputs])
  
  /** typescript like this */
  const handleChangeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  //    useAuth Hook to make a HTTP request on on frontend
  const handleClick = () =>{
    if(isSignin){
      signin({email: inputs.email, password: inputs.password}, handleClose)
    }
  }


  const renderButtonsContent = (signinContent: string, signupContent: string) =>{
    return isSignin ? signinContent : signupContent; {/* I want to return this same component 
                                                        with differents contents  */}
  }

  return (
    <div>
      <button className={`${isSignin ?'bg-green-400 text-white' : ''} border p-2 px-4 rounded mr-3`} 
              onClick={handleOpen}>{renderButtonsContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? 
            <div className="p-2 h-[600px] flex justify-center">
              <div className='w-10 h-10 bg-transparent border-4 border-gray-300 border-l-blue-600 rounded-full animate-spin'></div>
            </div>
           : 
          <div>
            <div className="p-2">
                {/* Error message */}
              {error ? <Alert className='mb-4' severity="error">{error}</Alert> : null}

              <div className="uppercase pb-2 border-b-4  text-left">
                <p className="font-light text-2xlg">{renderButtonsContent("Sign in", "CREATE AN ACCOUNT")}</p>
              </div>
            </div>
            <AuthModalInputs inputs={inputs} 
              handleChangeInputsValue={handleChangeInputsValue}
              isSignin={isSignin}
            />
            <div className='flex justify-center'>
              <button 
              className='bg-red-600 text-white w-[250px] uppercase p-2 px-4 rounded hover:bg-red-700 disabled:bg-gray-500'
              disabled={disabled}
              onClick={handleClick}
              >
                {renderButtonsContent("Sign in", "Create an account")}
              </button>
            </div>
          </div>}
        </Box>
      </Modal>
    </div>
  );
}