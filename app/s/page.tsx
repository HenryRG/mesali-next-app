import { PrismaClient } from "@prisma/client"
import Header from "./Header"
import RestaurantCard from "./RestaurantCard"
import SearchSideBar from "./SearchSideBar"

const prisma = new PrismaClient();

const fetchRestaurantByCity = async(city: string | undefined) =>{
  // select object to reduce space
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    slug: true
  }

  // If the restaurant does not have a city declared return all restaurants
  if(!city) return prisma.restaurant.findMany({
    // select object
    select
  });

  // If has return the restaurants tha the location name is equal to the city query
    return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          // lowercase city because the database is lower but the use should write on capitalized
          equals: city.toLowerCase(),
        }
      }
    },
    // select object
    select
  })
}
        //the search params always need to start with {params} : {params: {object: type}}
const SearchPage = async ({searchParams}: {searchParams: {city: string}}) => {
  const restaurant = await fetchRestaurantByCity(searchParams.city)
  console.log(restaurant)
  return (
    <main>
      <Header />
      {/* Hero Layout */}
      <div className="flex p-10 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6 pl-10">
          {restaurant.length ? <RestaurantCard /> : 
          <p>Sorry we don't found restaurants in this area, discover on others areas!</p>}
          
        </div>
      </div>


    </main>
  )
}

export default SearchPage