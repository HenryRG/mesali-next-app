import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Description from "./Description";



const RestaurantPage = () => {
  return (
    <main className="bg-white max-w-screen-2xl m-auto">
      {/* Navbar is global */}
        <Navbar />
        <Header />
        <Description />
        

        {/* <Link href="./">BACK TO HOMEPAGE</Link> */}
    </main>
  )
}

export default RestaurantPage