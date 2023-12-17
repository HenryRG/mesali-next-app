import DescriptionNavbar from "./DescriptionNavbar"
import Galery from "./Galery"
import Ratings from "./Ratings"
import Reservation from "./Reservation"
import Reviews from "./Reviews"

const Description = () => {
  return (
    // This is the overview description (the /r folder)
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-12">

        {/* DESCRIPTION PORTION */}
        <div className="bg-white rounded p-3 w-[70%] drop-shadow-lg">
          {/* Description Navbar */}
          <DescriptionNavbar />
          {/* Title */}
          <div className="mt-4 border-b pb-6">
              <h1 className="text-6xlg font-bold ">Lorem Ipsum</h1>
          </div>
          {/* Title */}
          {/* RATINGS */}
          <Ratings /> 
          <div className="mt-4">
              <p className="text-lg font-light">Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Deserunt corporis ipsa perspiciatis,
              at nemo sapiente ut autem tenetur accusantium nostrum vitae dignissimos tempore! Quos debitis quaerat repellat nesciunt laudantium voluptatum.</p>
          </div>
          {/* Galery */}
          <Galery />
          {/* Reviews */}
          <Reviews />
        </div>  
       {/* DESCRIPTION  PORTION */}
       <Reservation />
    </div>     
  )
}

export default Description