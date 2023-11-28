import ReviewCard from "./ReviewCard"

/**
 *  Reviews it's on description
 */ 
const Reviews = () => {
  return (
    <div>
       <h1  className="font-bold text-3xlg mt-10 mb-7 border-b pb-5">
        What People Say About Us
       </h1>
       {/* Review Card */}
        <div>
          <ReviewCard />
        </div>
       {/* Review Card */}
         
    </div>
  )
}

export default Reviews