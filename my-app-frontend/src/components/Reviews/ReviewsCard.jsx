import React from 'react'
import { ReviewsContext } from '../../context/reviewsContext'
import { baseUrl } from '../../Globals'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'


const ReviewsCard = ({review}) => {
  const {removeReview} = useContext(ReviewsContext)

  // const { id } = useParams();
  
  const navigate = useNavigate();

  const routeChange = () => {
    let path = '/reviews/:id/edit';
    // let path = `{baseUrl + '/reviews/' + ${id}}`;
    // let path = (`http://localhost:9292/review/${id}/edit`);
    navigate(path);
  }

  const handleClick = () => {
    fetch(baseUrl + '/reviews/' + review.id, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then((review) => {
        removeReview(review);
      })  
  }

  return (
    <div>
      <h5>{review.gangster_film?.title}</h5>
      <h5>{review.comment}</h5>
      <div> 
        <button onClick={routeChange}>Edit</button>   
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
 
}

export default ReviewsCard