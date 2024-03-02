import Stars from "@/app/components/Stars"
import { calculateReviewRatingAverege } from "@/app/utils/calculateReviewRatingAverage"
import { Review } from "@prisma/client"


const Ratings = ({review}: {review: Review[]}) => {
  const renderRating = () =>{
    return calculateReviewRatingAverege(review).toFixed(1)
  }
  return (
    <div className="flex items-end">
      <div className="flex mt-2 items-center ">
        <Stars review={review} />
        <p className="text-reg ml-3">({renderRating()})</p>
      </div>
      <div>
        <p className="text-reg ml-4">{review.length} {review.length > 1 ? "Reviews": 
                                                     review.length == 1 ? "Review"  : "" }</p>
      </div>
    </div>
  )
}

export default Ratings