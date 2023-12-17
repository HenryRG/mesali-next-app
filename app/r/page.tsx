import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Description from "./Description";



const RestaurantPage = () => {
  return (
      //this is the restaurant page 
    <main className="bg-white max-w-screen-2xl m-auto ">
      {/* Navbar is global */}
        <Navbar />
        <Header />
        <Description />
        
    </main>
  )
}

export default RestaurantPage