import Link from 'next/link'

const DescriptionNavbar = () => {
  return (
    <nav className='flex p-2 text-reg border-b'>
        <Link href="/r/@" className='mr-7' scroll={false}>Overview</Link>
        <Link href="/r/@/menu" className='mr-7' scroll={false}>Menu</Link>
    </nav>
  )
}

export default DescriptionNavbar