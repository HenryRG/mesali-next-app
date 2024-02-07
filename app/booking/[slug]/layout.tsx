import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'


const title = {
  name:"Lorem Ipsum",
  description: "This is a amazing restaurant"
}

export const metadata: Metadata = {
  title:  title.name + ` | you almost done`,
  description: title.description,
    icons: 
      {
        icon: '/favicon-16x16.png',
        href: '/favicon-16x16.png'
      },
}; 

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      {/* <Head /> */}
      <body className="bg-gray-100 min-h-screen w-screen">
        <div className="max-w-screen-2xl m-auto bg-white">
          {/* Navbar is Global */}
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
