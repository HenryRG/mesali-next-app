// import Header from "./Header";
import Description from "./components/Description";
import { PrismaClient, Review, User } from "@prisma/client";
import Reservation from "./components/Reservation";

// You need a interface, because without off this the restaurant return the data or NULL

const prisma = new PrismaClient();

export interface RestaurantSlugType {
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string,
  review: Review[],
  open_time: string,
  close_time: string,
}

const fetchRestaurantSlug = async (slug: string) =>{
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      review: true,
      open_time: true,
      close_time: true,
    }
  }); //Make sure the data always return restaurant if not return error
  if (!restaurant){
    throw new Error()
  }
  return restaurant
}
// To check u=ou use props: any  but I want the params of prop
const RestaurantPage = async ({params} : {params: {slug: string}}) => {

  const restaurant = await fetchRestaurantSlug(params.slug)
  // console.log(restaurant)
  return (
      //this is the restaurant page 
    <main className="flex m-auto w-2/3 justify-between items-start 0 -mt-12">
        <Description restaurant={restaurant}/>
        <Reservation 
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
    </main>
  )
}

export default RestaurantPage