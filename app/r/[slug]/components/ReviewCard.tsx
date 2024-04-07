import Stars from "@/app/components/Stars"
import { Review } from "@prisma/client"

const ReviewCard = ({review}: {review: Review}) => {
// console.log({review})

  return (
    <div className="border-b pb-7 mb-7">
        <div className="flex">
            {/* Circle and Name column */}
            <div className="w-1/6 flex flex-col items-center">
                {/* Circle White the user initials */}
                <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                    <h2 className="font-bold text-white">{review.first_name[0]}{review.last_name[0]}</h2>
                </div>
                {/* End of Circle */}
                <p className="font-bold text-center">{review.first_name} {review.last_name}</p>
            </div>
            {/* End of Circle Column */}
            {/* Reviews column start */}
            <div className="ml-10 w-5/6">
                    {/* star div */}
                <div className="flex items-center">
                    <div className="flex mr-5">
                       <Stars reviewRating={review.rating} review={[]}/>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-lg font-light">
                        {review.text}
                    </p>
                </div>

            </div>
            {/* Reviews column end */}
        </div>
    </div>
  )
}

export default ReviewCard