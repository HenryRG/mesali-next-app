import { PRICE, PrismaClient } from "@prisma/client"
import Header from "./Header"
import RestaurantCard from "./RestaurantCard"
import SearchSideBar from "./SearchSideBar"

const prisma = new PrismaClient();

interface SearchParams {    //http: localhost:3000/s?city="string"?cuisine="string"?price=PRICE
    city?: string, cuisine?: string, price?: PRICE
}

const fetchRestaurants = (searchParams: SearchParams) => {
  //filter the searchParams almost direct from the database
  const where: any = {};

  if(searchParams.city){
    const location = { //Destruct the object
      name:  {
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location = location
  }
  if(searchParams.cuisine){
    const cuisine = {
      name:  {
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine
  }
  if(searchParams.price){
    const price = {
      equals: searchParams.price
    }
    where.price = price
  }



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
  // if(!city) return prisma.restaurant.findMany({
  //   // select object
  //   select
  // });

  // If has return the restaurants tha the location name is equal to the city query
  return prisma.restaurant.findMany({
      // the 'where' come from the top
    where,
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
const SearchPage = async ({searchParams}: {
  searchParams:    //http: localhost:3000/s?city=toronto?cuisine=italian?price=CHEAP
    SearchParams
}) => {                     //This was the line who filter just the location on database
  const restaurants = await fetchRestaurants(searchParams)  //Now is filtering location, cuisine and PRICE
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
          searchParams={searchParams}
          
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