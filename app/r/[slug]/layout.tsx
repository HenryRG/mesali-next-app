import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Header from './Header';


const title = {
  name: "Lorem Ipsum",
  description: "This is a amazing restaurant"
}


export const metadata: Metadata = {
  title:  title.name + ` | Restaurant`,
  description: title.description,
    icons: 
      {
        icon: '/favicon-16x16.png',
        href: '/favicon-16x16.png'
      },
}; 

export default function RestaurantLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {slug: string}
}) {
  return (
    <>
      <body className="bg-gray-100 min-h-screen w-screen">
        <div className="max-w-screen-2xl m-auto bg-white">
          {/* Navbar is Global */}
          <Navbar />
          <Header name={params.slug}/>
          {children}
        </div>
      </body>
    </>
  )
}
