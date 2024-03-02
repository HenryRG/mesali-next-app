import  Link  from 'next/link'
import AuthModal from './AuthModal'

const Navbar = () => {
    return (
        <nav className="w-screen bg-white p-2 px-6 flex justify-between overflow-hidden">
            <Link href="/" className='font-bold text-gray-700 text-3xlg'>Mesali</Link>
            {/* Sign Buttons */}
            <div>
                <div className='flex'>
                    <AuthModal isSignin={true}/>
                    <AuthModal isSignin={false}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar