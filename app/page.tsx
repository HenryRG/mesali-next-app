import Header from './components/Header'
import CardArea from './components/CardArea'
import Navbar from './components/Navbar'
import { PrismaClient } from '@prisma/client'  //importing the ORM from Prisma

const prisma = new PrismaClient();  //running the prisma database

const fetchRestaurants = async () => {  //fetching the data from database
  const restaurants = await prisma.restaurant.findMany(); //finding many restaurants from db

  return restaurants 
}

export default async function Home() {  //putting the data inside the components
  const restaurants = await fetchRestaurants();

  console.log({restaurants})
  return (
    <div> 
      {/* Homepage Header */}
      <Navbar />
      <Header />
      {/* Homepage Card Area */}
      <CardArea />

    </div>
  )
}
