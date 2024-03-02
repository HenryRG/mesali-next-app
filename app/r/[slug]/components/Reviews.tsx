import { Review } from "@prisma/client"
import ReviewCard from "./ReviewCard"

const Reviews = ({review}: {review: Review[]}) => {
  return (
    <div>
       <h1  className="font-bold text-3xlg mt-10 mb-7 border-b pb-5">
        What {review.length} 
              {review.length === 1? " Person": 
              review.length > 1 ? " People": ""
              } Say About Us
       </h1>
        <div>
          {review.map(review=>(
            <ReviewCard review={review} key={review.id}/>
          ))}
        </div>
    </div>
  )
}

export default Reviews