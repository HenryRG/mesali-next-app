import { Cuisine, Location } from "@prisma/client";

const SearchSideBar = ({locations, cuisines}:  {locations: Location[], cuisines: Cuisine[]} ) => {
    // console.log({restaurant})
  return (
    <div className="w-1/5">
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Region</h1>
            {locations.map((location) => (
                <p className="text-reg capitalize" key={location.id}>{location.name}</p>
            ))}
            
        </div>
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Cuisine</h1>
            {cuisines.map(cuisine =>(
                <p className="text-reg capitalize" key={cuisine.id}>{cuisine.name}</p>
            ))}
            
        </div>
        <div className="mt-3 b-4">
            <h1 className="font-bold pb-2">Price</h1>
            <div className="flex">
                <button className="border w-full rounded-l-lg hover:bg-green-500">$</button>
                <button className="border w-full rounded-none hover:bg-green-500">$$</button>
                <button className="border w-full rounded-r-lg hover:bg-green-500 ">$$$</button>
            </div>
        </div>
    </div> 
  )
}

export default SearchSideBar