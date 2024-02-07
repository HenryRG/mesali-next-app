
import Header from './components/Header'
import CardArea from './components/CardArea'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      {/* Homepage Header */}
      <Navbar />
      <Header />
      {/* Homepage Card Area */}
      <CardArea />

    </div>
  )
}
