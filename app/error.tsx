"use client"

import Image from 'next/image'
import errorIcon from '../public/icons/error.png'
import Navbar from './components/Navbar'
import Link from 'next/link'

export default function Error({error}: {error: Error}) {
  return (
    <>
        <Navbar />
        <div className='w-full h-screen bg-gray-200 flex flex-col justify-center items-center'>
            <Image className='w-40 h-40 animate-bounce' src={errorIcon} alt="error" />
            <div className="bg-white flex-col px-9 py-14 shadow-lg rounded-lg">
                <h3>An Error occured</h3>
                <Link href="/" className='text-2xlg font-bold'>Reload The Page</Link>

                <p>ERROR CODE: {error.name}</p>
            </div>
        </div>
    </>
  )
}