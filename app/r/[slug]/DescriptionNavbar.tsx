import Link from 'next/link'

const DescriptionNavbar = ({slug}: {slug: string}) => {
  return (
    <nav className='flex p-2 text-reg border-b'>
        <Link href={`/r/${slug}`} className='mr-7' scroll={false}>Overview</Link>
        <Link href={`/r/${slug}/menu`} className='mr-7' scroll={false}>Menu</Link>
    </nav>
  )
}

export default DescriptionNavbar