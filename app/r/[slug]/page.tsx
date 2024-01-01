import Link from "next/link";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import Description from "./Description";



const RestaurantPage = () => {
  return (
      //this is the restaurant page 
    <main>
      {/* Navbar is global */}
        <Header />
        <Description />
        
    </main>
  )
}

export default RestaurantPage