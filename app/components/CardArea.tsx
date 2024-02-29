import Link from "next/link"
import { RestaurantCardType } from "../page"
import Price from "./Price"
import Stars from "./Stars"


interface Props {
    restaurant: RestaurantCardType
}

const CardArea = ({restaurant}: Props) => {
    // console.log({review})
    const renderReview = () =>{
        return (restaurant.review.length) === 1 ? `${restaurant.review.length} review` 
                : `${restaurant.review.length} reviews`
    }

  return (
    <div className="flex-wrap py-2 px-2 mt-10 ">

        {/* card */}
        <Link className="w-64 h-72 m-3 rounded-lg overflow-hidden border cursor-pointer" href={`/r/${restaurant.slug}`}>
                {/* card image */}
            <img src={restaurant.main_image} 
                 alt=""
                 className="w-64 h-36 rounded" />

                 {/* Card descriptions */}
            <div className="p-1 ">
                {/* title */}
                <h3 className="font-bold text-2xlg mb-2">{restaurant.name}</h3>
                    {/* Star And review rating */}
                <div className="flex items-start">
                    {/* Star Rating */}
                    <Stars review={restaurant.review} />
                    <p className="ml-2" key={restaurant.id}>{renderReview()}</p>
                </div>
                <div className="flex font-light capitalize">
                    <p className="text-reg  mr-3">{restaurant.cuisine.name}</p> •
                    <Price price={restaurant.price}/> •
                    <p className="mx-3">{restaurant.location.name}</p>
                </div>
                <p className="font-medium my-1">Booked 4 times today</p>
            </div>
                 {/* Card descriptions */}
        </Link>
        
    </div>
  )
}

export default CardArea

//v@1Tom@r1Ju1c3
