import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          {/* Navbar is Global */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
