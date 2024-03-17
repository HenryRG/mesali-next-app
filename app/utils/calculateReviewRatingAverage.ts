import { Review } from "@prisma/client";

export const calculateReviewRatingAverege = (review: Review[]) =>{
    if(!review.length) return 0;
    
    return review.reduce((sum, review) =>{
        return sum + review.rating  //The sum of all divide by the length
    }, 0)/review.length
}; //0 is the starting point for the calculation
