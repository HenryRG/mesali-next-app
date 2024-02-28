"use server"

import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link"
import Price from "../components/Price";
//Make the interface because is necessary define the type
export interface Restaurant {
    slug: string;
    main_image: string;
    name: string;
    id: number;
    cuisine: Cuisine;
    location:  Location;
    price: PRICE
};

const RestaurantCard = ({restaurant}: {restaurant: Restaurant}) => {
    // console.log(restaurant)
  return (
        // Restaurant layout
    <div className="mb-7">
            <Link href={`/booking/${restaurant.slug}`}>
            {/* Restaurant Card */}
            <div className="border-b flex h-44">
                <img src={restaurant.main_image} 
                    alt="" className="rounded w-44 h-44 mr-4 " 
                />
                <div className="flex-wrap">
                    <h2 className="text-2xlg font-bold text-cyan-600 capitalize">{restaurant.name}</h2>
                    <div className="flex">
                        <p className="text-4xlg mr-2">******</p>
                        <p className="text-lg mt-1 text-gray-600 mr-2">Exceptional</p>
                        <p className="text-lg mt-1 text-gray-500">({restaurant.id})</p>
                    </div>
                    <div className="flex -mt-2 text-reg pb-8">
                        <Price price={restaurant.price} /> * 
                        <p className="mx-4 capitalize">{restaurant.cuisine.name}</p> * 
                        <p className="mx-4 capitalize">{restaurant.location.name}</p>
                    </div>
                    <div className="">
                        <Link href={`/r/${restaurant.slug}`} className="text-white bg-red-700 rounded-l p-2">Click For More Information</Link>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default RestaurantCard