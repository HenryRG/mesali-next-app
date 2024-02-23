import Header from "./Header";
import Description from "./Description";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

// You need a interface, because without off this the restaurant return the data or NULL

const prisma = new PrismaClient();

interface RestaurantSlugType {
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string
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
      slug: true
    }
  }); //Make sure the data always return restaurant if not return erroe
  if (!restaurant){
    throw new Error()
  }
  return restaurant
}
// To check u=ou use props: any  but I want the params of prop
const RestaurantPage = async ({params} : {params: {slug: string}}) => {

  const restaurant = await fetchRestaurantSlug(params.slug)
  console.log(restaurant)
  return (
      //this is the restaurant page 
    <main>
        <Description />
    </main>
  )
}

export default RestaurantPage