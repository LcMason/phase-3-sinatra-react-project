import React from 'react'
import { baseUrl } from '../../Globals'

const ReviewsCard = ({review}) => {


  const handleClick = () => {
    fetch(baseUrl + '/reviews/' + review.id, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log('review deleted')
        //remove from ReviewState
        //remove from GangsterFilm state
      })
      removeReview();
      removeGangsterFilm();
  }
  
  return (
    <div>
      <h5>{review.gangster_film?.title}</h5>
      <h5>{review.comment}</h5>
      
    </div>
  )
 
}

export default ReviewsCard