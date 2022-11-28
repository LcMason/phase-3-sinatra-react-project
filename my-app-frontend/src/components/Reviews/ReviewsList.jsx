import React from 'react'
import { useContext } from 'react'
import { ReviewsContext } from '../../context/reviewsContext'
import ReviewsCard from './ReviewsCard'

const ReviewsList = () => {
  const { reviews } = useContext(ReviewsContext)

  const reviewCards = reviews.map(review => <ReviewsCard key={review.id} review={review} />)

  return (
    <div>
      <h4>List Reviews</h4>
     {reviewCards}
    </div>
  )
}

export default ReviewsList