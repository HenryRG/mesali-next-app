import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header /> 

    </main>
  )
}
