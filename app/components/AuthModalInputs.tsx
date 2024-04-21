
interface  Props {
  inputs: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    password: string,
    verifyPassword: string,
  }
  handleChangeInputsValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean
}

const AuthModalInputs = (
    {inputs, handleChangeInputsValue, isSignin}
      : Props) => {
  return (
    <form>
      <div className="my-3 flex justify-between flex-wrap">
        {isSignin ? null : 
        <div>
          <input 
            type="text" 
            placeholder='First Name' 
            value={inputs.firstName}
            onChange={handleChangeInputsValue}
            name="firstName"
            autoComplete="given-name"
          className='w-[47%] m-1 border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
      
          <input 
            type="text" 
            placeholder='Last Name' 
            value={inputs.lastName}
            onChange={handleChangeInputsValue}
            name="lastName"
          className='w-[47%] m-1 border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
        </div> } {/** Is it? */}
        <div className="w-full mr-3">
          <input 
            type="email" 
            placeholder={isSignin? "Email" : 'Your best email' }
            value={inputs.email}
            onChange={handleChangeInputsValue}
            name="email"
            autoComplete="email"
          className='w-full m-1 border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
        </div>
        {isSignin ? null :
        <div>
          <input type="text" 
            placeholder='Phone number' 
            value={inputs.phone} 
            onChange={handleChangeInputsValue}
            name="phone"
            autoComplete="tel"
          className='w-[47%] m-1  border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />

          <input 
            type="text" 
            placeholder='City' 
            value={inputs.city}
            onChange={handleChangeInputsValue}
            autoComplete="address-line1"
            name="city"
          className='w-[47%] m-1  border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
        </div> } 
        <div className="mr-3 w-full">
          <input 
            type="password" 
            placeholder={isSignin? "Your password" :'Create a password' }
            value={inputs.password}
            onChange={handleChangeInputsValue}
            autoComplete="current-password"
            name="password"
          className='w-full m-1 border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
        </div>
       {isSignin ? null : 
        <div className="mr-3 w-full">
          <input 
            type="password" 
            placeholder='Verify the password' 
            value={inputs.verifyPassword}
            onChange={handleChangeInputsValue}
            autoComplete="new-password"
            name="verifyPassword"
          className='w-full m-1 border-gray-300 border p-2 rounded focus:outline-none focus:border-b-blue-800 focus:border-b-3' 
          />
        </div>}
      </div>
      
    </form>
  )
}

export default AuthModalInputs