"use client"

import { fabClasses } from "@mui/material"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useState, createContext, useEffect } from "react"

interface User {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    phone: string
}

interface State {
    loading: boolean,
    data: User | null,
    error: string | null
}

interface AuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>
}

// this need to be a global component
export const AuthenticationContext = createContext<AuthState>({
    loading: false,
    data: null,  
    error: null,
    setAuthState: () => {}
});


export default function AuthContext({children}: {children: React.ReactNode}){
    const [authState, setAuthState] = useState<State>({
        loading: true,
        data: null,
        error: null
    })
        // Fetch User from JWT
    const fetchUser = async () => {
        setAuthState({
            error: null,
            loading: true,
            data: null
        })
        try {
            const jwt = getCookie("jwt")

            if(!jwt){
                setAuthState({
                    error: null,
                    loading: false,
                    data: null
                })
            }
                // Get the response from /me route to if the JWT exist
            const response = await axios.get("http://localhost:3000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })  // Set default the axios request to continuous be from the jwt saved on the Browser
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
            // And When the data is OK Run the data through the Authentication Context
            setAuthState({
                data: response.data,
                error: null,
                loading: false
            })

        
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false
            })
        }
    };
    
    useEffect(()=>{
        fetchUser();
    },[]);

    return <AuthenticationContext.Provider 
            value={{
                ...authState,
                setAuthState
                }}>
                {children}
            </AuthenticationContext.Provider>
}