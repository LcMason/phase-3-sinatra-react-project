import React from 'react'

const ReviewsCard = ({review}) => {
  
  return (
    <div>
      <h5>{review.gangster_film?.title}</h5>
      <h5>{review.comment}</h5>
      
    </div>
  )
}

export default ReviewsCard