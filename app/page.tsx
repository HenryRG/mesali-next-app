// import Image from 'next/image'
// import styles from './page.module.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardArea from './components/CardArea'

export default function Home() {
  return (
    <main>
      {/* Homepage Header */}
      <Header />
      {/* Homepage Card Area */}
      <CardArea />

    </main>
  )
}
