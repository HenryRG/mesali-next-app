"use client"
import fullStar from '../../public/icons/full-star.png';
import emptyStar from '../../public/icons/empty-star.png';
import halfStar from '../../public/icons/half-star.png';
import Image from 'next/image'
import { Review } from '@prisma/client';
import { calculateReviewRatingAverege } from '../utils/calculateReviewRatingAverage';


const Stars = ({review, reviewRating}: {review: Review[], reviewRating?: number}) => {
  const rating = reviewRating || calculateReviewRatingAverege(review);

  const renderStars = () =>{ 
    const star = [];

    for(let i = 0; i < 5; i++){
      const difference = parseFloat((rating - i).toFixed(1))
      if(difference >= 1) star.push(fullStar); // is >= 1
      else if(difference < 1 && difference > 0){ //is between 0 and 1 but != 1 || 0
        if(difference <= 0.2) star.push(emptyStar);
        else if(difference > 0.2 && difference <= 0.6) star.push(halfStar)
        else star.push(fullStar) // is == 0
      }
      else star.push(emptyStar)
    }       // iterate from the stars that are pushed into star[]  
    return star.map((star) => (
      <div className='flex flex-row my-1'>
        <Image src={star} alt="" className='w-4 h-4 mr-1' />
      </div>
    ))
  }

  return renderStars()

};

export default Stars