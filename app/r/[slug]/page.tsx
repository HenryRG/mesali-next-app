// import Header from "./Header";
import Description from "./components/Description";
import { PrismaClient, Review, User } from "@prisma/client";

// You need a interface, because without off this the restaurant return the data or NULL

const prisma = new PrismaClient();

export interface RestaurantSlugType {
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string,
  review: Review[],
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
    <main>
        <Description restaurant={restaurant}/>
    </main>
  )
}

export default RestaurantPage