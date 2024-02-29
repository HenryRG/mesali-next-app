import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";



const SearchSideBar = ({
    locations, 
    cuisines, 
    searchParams
}:  {
    locations: Location[], 
    cuisines: Cuisine[], 
    searchParams: {city?: string, cuisine?: string, price?: PRICE}} ) => {
    
    const prices = [
        {   price: PRICE.CHEAP,  label: "$", className:"border w-full text-center rounded-l-lg hover:bg-green-500" }, 
        {   price: PRICE.REGULAR,  label: "$$", className: "border w-full text-center rounded-none hover:bg-green-500"  },
        {   price: PRICE.EXPENSIVE,  label: "$$$", className:"border w-full text-center rounded-r-lg hover:bg-green-500 "  },
    ];

  

  return (
    <div className="w-1/5">
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Region</h1>
            {locations.map((location) => (
                <Link 
                href={{
                    pathname: `/s`,
                    query: {  ...searchParams, city: `${location.name}` }
                }} scroll={false} key={location.id}>
                    <p className="text-reg capitalize" key={location.id}>{location.name}</p>
                </Link>
            ))}
            
        </div>
        <div className="border-b pb-4">
            <h1 className="mb-2 font-bold">Cuisine</h1>
            {cuisines.map((cuisine) =>(
                <Link href={{
                    pathname: `/s`,
                    query: {...searchParams, cuisine: `${cuisine.name}` }
                }} scroll={false} key={cuisine.id}
                >
                    <p className="text-reg capitalize" key={cuisine.id}>{cuisine.name}</p>
                </Link>
            ))}
            
        </div>
        <div className="mt-3 b-4">
            <h1 className="font-bold pb-2">Price</h1>
            <div className="flex">
                {prices.map(({price, label, className}) => (
                    <Link href={{
                        pathname: `/s`,
                        query: { ...searchParams, price,}
                    }}  className={className} scroll={false} key={price}>{label}</Link>
                ))}
                
                {/* 
                }} className="border w-full rounded-none hover:bg-green-500">$$</Link>
               
                }} className="border w-full rounded-r-lg hover:bg-green-500 ">$$$</Link> */}
            </div>
        </div>
    </div> 
  )
}

export default SearchSideBar