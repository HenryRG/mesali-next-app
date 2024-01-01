import Navbar from "@/app/components/Navbar"
import Header from "../Header"
import MenuDescription from "./MenuDescription"
import Link from "next/link"


const menu = () => {
  return (
    <main className="bg-white max-w-screen-2xl m-auto">
      {/* Navbar is global */}
        <Navbar />
        <Header />
        <MenuDescription />
        
        <Link href="/s" className="text-decoration-transparent">Hidden Acess</Link>


    </main>
  )
}

export default menu