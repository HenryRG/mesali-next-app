import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = {
  name:"Mesali"
}


export const metadata: Metadata = {
  title: title.name,
  description: 'Website description',
    icons: 
      {
        icon: '/favicon-16x16.png',
        href: '/favicon-16x16.png'
      },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen w-screen">
        <div className="max-w-screen-2xl m-auto bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
