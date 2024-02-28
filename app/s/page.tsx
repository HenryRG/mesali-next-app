import { PrismaClient } from "@prisma/client"
import Header from "./Header"
import RestaurantCard from "./RestaurantCard"
import SearchSideBar from "./SearchSideBar"

const prisma = new PrismaClient();

const fetchRestaurantByCity = (city: string | undefined) =>{
  // select object to reduce space
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    slug: true,
    price: true
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
const fetchLocation = async () =>{
  return prisma.location.findMany()
}
const fetchCuisine = async () =>{
  return prisma.cuisine.findMany()
}

        // Extracting the query parameters
const SearchPage = async ({searchParams}: {searchParams: {city: string}}) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city)
  const location = await fetchLocation();
  const cuisine = await fetchCuisine();
  return (
    <main>
      <Header />
      {/* Hero Layout */}
      <div className="flex p-10 m-auto w-2/3 justify-between items-start">
        <SearchSideBar 
          locations={location}
          cuisines={cuisine}
        />
        <div className="w-5/6 pl-10">
          {  //if restaurant does not return a city return a p tag
            restaurants.length ? (
            <> 
              {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)) 
              }
            </>
            ) : (
             <p>Sorry we don't found restaurants in this area, discover on others areas!</p>
            )
          }
          
        </div>
      </div>


    </main>
  )
}

export default SearchPage