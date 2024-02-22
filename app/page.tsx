import Header from './components/Header'
import CardArea from './components/CardArea'
import Navbar from './components/Navbar'
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client'

export interface RestaurantCardType {
    id: number,
    name: string,
    main_image: string,
    location: Location,
    cuisine: Cuisine,
    price: PRICE
}

const prisma = new PrismaClient();

const fetchRestaurant = async (): Promise<RestaurantCardType[]> =>{
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      location: true,
      cuisine: true,
      price: true
    }

  })
  return restaurants;   
}

export default async function Home() {  
  const restaurants = await fetchRestaurant();
  // console.log({restaurants})

  return (
    <div>
      <Navbar />
       {/* Homepage Header */}
      <Header />
      {/* Homepage Card Area */} 
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">

        { restaurants.map((restaurant)=> (  
          <CardArea key={restaurant.id} restaurant = {restaurant}/>  
        )) }
        
      </div>
     
      
    </div>
  )
}
