import DescriptionNavbar from "../DescriptionNavbar"
import Reservation from "../Reservation"

const MenuDescription = () => {
  return (
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-12">

        {/* DESCRIPTION PORTION */}
       <div className="bg-white rounded p-3 w-[70%] drop-shadow-lg">
          {/* Description Navbar */}
            <DescriptionNavbar />
          {/* Title */}
          <div className="mt-4 border-b pb-6 ">
              <h1 className="text-6xlg font-bold ">Menu</h1>
          </div>
          {/* Title */}
          <div className="flex flex-wrap justify-between">
            <div className="border rounded p-3 w-[40%] mb-2">
              <h3 className="text-lg font-bold">DingoWeengo</h3>
              <p className="text-sm mt-1">A really good chicken</p>
              <p className="font-bold mt-7">$25.00</p>
            </div>
          </div>
       </div>  

       {/* DESCRIPTION  PORTION */}
       <Reservation />
    </div>
  )
}

export default MenuDescription