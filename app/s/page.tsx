import Header from "./Header"
import RestaurantCard from "./RestaurantCard"
import SearchSideBar from "./SearchSideBar"



const SearchPage = () => {
  return (
    <main>
        <Header />
        {/* Hero Layout */}
        <div className="flex p-10 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6 pl-10">
            <RestaurantCard />
            <RestaurantCard />
            {/* <RestaurantCard /> */}
            {/* <RestaurantCard /> */}
          </div>
        </div>


    </main>
  )
}

export default SearchPage