import  Link  from 'next/link'

const Navbar = () => {
    return (
        <nav className="w-full bg-white p-2 flex justify-between">
            <Link href="/" className='font-bold text-gray-700 text-3xlg'>Mesali</Link>
            {/* Sign Buttons */}
            <div>
                <div className='flex'>
                    <button className='bg-green-400 text-white border p-2 px-4 rounded mr-3'>Sign in</button>
                    <button className=' border p-2 px-4 rounded'>Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar