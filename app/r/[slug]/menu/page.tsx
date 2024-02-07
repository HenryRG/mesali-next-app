import Header from "../Header"
import MenuDescription from "./MenuDescription"
import Link from "next/link"


const menu = () => {
  return (
    <main>
      {/* Navbar is global */}
        <MenuDescription />
        <Link href="/s" className="text-decoration-transparent">Hidden Acess</Link>


    </main>
  )
}

export default menu