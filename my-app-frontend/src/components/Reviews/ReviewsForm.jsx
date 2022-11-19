// import React, {useEffect, useState} from 'react'
// //import { useHandleChange } from '../hooks';
// import {useContext} from 'react'
// import { ReviewsContext } from '../../context/reviewsContext';
// import { headers } from '../../Globals'; 
// import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../Globals';

// const ReviewsForm = ({id}) => {
//   const [review, setReview] = useState({})
//   //const [comment, handleChangeComment] = useHandleChange("");
//   const navigate = useNavigate()

//   const {reviews, setReviews} = useContext(ReviewsContext);
//   console.log(reviews)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target)
//     const data = Object.fromEntries(formData.entries())
//     console.log(data)

//     const payload = {
//       comment: data.comment,
//       gangster_film_id: id,
//       critic_id: data.critic_id
//     }
//     //handleChangeComment(payload)
//     console.log(payload)

//     setReview(payload)
//   }

//   useEffect(() => {
//     fetch(baseUrl + '/reviews', {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(review)
//     })
//     .then(resp => resp.json())
//             .then(data => {
//                 setReviews([...reviews, data])
//                 navigate('/reviews')
//             })
//   }, [review]) 

//   return (
//     <div>
//       <h3>Create Review:</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="comment">Comment:</label>
//           <input type="text" name="comment" id="comment" required/>
//           <label htmlFor="critic">Critic ID:</label>
//           <input type="number" name="critic_id" id="critic" min="0" required/>
//         </div>
//         <input type="submit" value="Create Review" />
//       </form>
//     </div>
//   )
// }

// export default ReviewsForm