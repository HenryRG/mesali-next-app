import { RestaurantSlugType } from "../page"
import DescriptionNavbar from "./DescriptionNavbar"
import Galery from "./Galery"
import Ratings from "./Ratings"
// import Reservation from "./Reservation"
import Reviews from "./Reviews"


interface Props {
  restaurant: RestaurantSlugType
}

const Description = ({restaurant}: Props) => {
  return (
    // This is the overview description (the /r folder)
   
      <div className="bg-white rounded p-3 w-[70%] drop-shadow-lg">
          {/* Description Navbar */}
          <DescriptionNavbar slug={restaurant.slug}/>
          {/* Title */}
          <div className="mt-4 border-b pb-6">
              <h1 className="text-6xlg font-bold ">{restaurant.name}</h1>
          </div>
          {/* Title */}
          {/* RATINGS */}
          <Ratings review={restaurant.review}/> 
          <div className="mt-4">
              <p className="text-lg font-light">{restaurant.description}</p>
          </div>
          {/* Galery */}
          <Galery images={restaurant.images}/>
          {/* Reviews */}
          <Reviews review={restaurant.review}/>
      </div>  
  )
}

export default Description