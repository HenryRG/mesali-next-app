"use server"

import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link"
import Price from "../components/Price";
import { calculateReviewRatingAverege } from "../utils/calculateReviewRatingAverage";
import Stars from "../components/Stars";
//Make the interface because is necessary define the type
export interface Restaurant {
    slug: string;
    main_image: string;
    name: string;
    id: number;
    cuisine: Cuisine;
    location:  Location;
    price: PRICE,
    review: Review[]
};

const RestaurantCard = ({restaurant}: {restaurant: Restaurant}) => {
    // console.log(restaurant)
    const renderRating = () =>{
        const rating =  calculateReviewRatingAverege(restaurant.review)
        return rating >= 4.5 ? "Exceptional" :
               rating >= 4.0 && rating < 4.5 ? "Awesome" :
               rating <  4.0 && rating > 3 ? "Good":
               ""
    }
  return (
        // Restaurant layout
    <div className="mb-7" key={restaurant.id}>
            <Link href={`/booking/${restaurant.slug}`}>
            {/* Restaurant Card */}
            <div className="border-b flex h-44">
                <img src={restaurant.main_image} 
                    alt="" className="rounded w-44 h-44 mr-4 " 
                />
                <div className="flex-wrap">
                    <h2 className="text-2xlg font-bold text-cyan-600 capitalize">{restaurant.name}</h2>
                    <div className="flex">
                        <Stars review={restaurant.review}/>
                        <p className="text-lg mb-2 text-gray-600 mr-2">{renderRating()}</p>
                        <p className="text-lg mb-2 text-gray-500">({restaurant.review.length})</p>
                    </div>
                    <div className="flex -mt-2 text-reg pb-8 -ml-2">
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