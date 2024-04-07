import { AuthenticationContext } from "@/app/context/AuthContext"
import axios from "axios"
import { useContext } from "react"



const useAuth = () => {

    const {error, loading, data, setAuthState} = useContext(AuthenticationContext)

    const signin = async (
        {email, password} 
        : {email: string, password: string}, handleClose: () => void) => {    
        //When the user click on signin button
        setAuthState({
            error: null,
            loading: true,
            data: null
        })
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signin", {
                email,
                password,
            })
            //When try to receive data from DB
            setAuthState({
                error: null,
                loading: false,
                data: response.data,
            }) //HandleClose came just when the data is true
            handleClose()
            // console.log(response)
        } catch (error: any) {
            setAuthState({
                error: error.response.data.errorMessage,
                loading: false,
                data: null
            })
        }
    }

    const signup = () => {

    }

    return {
        signin,
        signup
    }
 
}
export default useAuth