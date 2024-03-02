import { PrismaClient } from "@prisma/client"
// import Header from "../Header"
import MenuDescription from "./MenuDescription"
import DescriptionNavbar from "../components/DescriptionNavbar"
import Reservation from "../components/Reservation";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })
  if(!restaurant){
    throw new Error()
  }   {/* Return just items because at this component you don't need everything */}
  return restaurant.items;

}

const RestaurantMenu = async ({params}: {params: {slug: string}}) => {
   const menu = await fetchRestaurantMenu(params.slug);
   console.log({menu})
  return (
    <main >
          {/* Restaurant Menu Layout */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-12">
        <div className="bg-white rounded p-3 w-[70%] drop-shadow-lg">
          <DescriptionNavbar slug={params.slug} />
          {/* Menus */}
          <MenuDescription menu={menu}/>
          
        </div>
        {/* Reservation Card */}
       <Reservation />
      </div>
    

    </main>
  )
}

export default RestaurantMenu;