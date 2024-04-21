"use client"

import  Link  from 'next/link'
import AuthModal from './AuthModal'
import { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthContext'
import useAuth from '@/hooks/useAuth'


const Navbar = () => {
    const { data, loading } = useContext(AuthenticationContext)
    const { signout } = useAuth()

    return (
        <nav className="w-screen bg-white p-2 px-6 flex justify-between overflow-hidden">
            <Link href="/" className='font-bold text-gray-700 text-3xlg'>Mesali</Link>
            {/* Sign Buttons */}
            { loading ? null : <div>
                <div className='flex'>
                    { data ? <button onClick={signout} className="bg-green-400 text-white border p-2 w-[85px] rounded mr-3">Logout</button>   :  
                    <div className="flex">
                        <AuthModal isSignin={true}/>
                        <AuthModal isSignin={false}/>
                    </div>}
                </div>
            </div>}
        </nav>
    )
}

export default Navbar