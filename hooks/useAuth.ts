import { AuthenticationContext } from "@/app/context/AuthContext"
import axios from "axios"
import { deleteCookie } from "cookies-next"
import { useContext } from "react"


const useAuth = () => {

    const {error, loading, data, setAuthState} = useContext(AuthenticationContext)

    const signup = async (
        {
            email, 
            firstName,
            lastName,
            city,
            phone,
            password,

        } : {
            email: string, 
            firstName: string,
            lastName: string,
            city: string,
            phone: string,
            password: string,
        }, handleClose: () => void
    ) => {
        setAuthState({
            error: null,
            loading: true,
            data: null
        })
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", {
                email, 
                firstName,
                lastName,
                city,
                phone,
                password,
            });
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
            console.log(error.response.data.errorMessage)
        }
    }

    const signin = async (
        {email, password} 
        : {email: string, password: string}, handleClose: () => void,
    ) => {    
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
    };

    const signout = () => {
        deleteCookie("jwt");

        setAuthState({
            error: null,
            loading: false,
            data: null
        })
    }

    return {
        signup,
        signin,
        signout
    }
}
export default useAuth;