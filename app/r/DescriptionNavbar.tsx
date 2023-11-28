import Link from 'next/link'

const DescriptionNavbar = () => {
  return (
    <nav className='flex p-2 text-reg border-b'>
        <Link href="" className='mr-7'>Overview</Link>
        <Link href="" className='mr-7'>Menu</Link>
    </nav>
  )
}

export default DescriptionNavbar