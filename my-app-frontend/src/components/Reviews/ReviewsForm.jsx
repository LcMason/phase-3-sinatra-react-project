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

import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
import { ReviewsContext } from '../../context/reviewsContext';
// import { CriticsContext } from '../../context/criticsContext';
import { useHandleChange } from '../../hooks'
// import { Navigate, useNavigate } from 'react-router-dom'; Navigate should be in reviewsContext

const ReviewsForm = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext);
  const {addReview} = useContext(ReviewsContext);
  // const [comment, handleChangeComment] = useHandleChange("");
  // const [review, handleChangeReview] = useHandleChange("");
  const [comment, handleChangeComment] = useHandleChange("");
  const [gangster_film_id, setGangsterFilmId] = useState("");

  useEffect(() => {
    if(gangsterFilms.length > 0) {
      setGangsterFilmId(gangsterFilms[0].id)
    }
  }, [gangsterFilms])

 
  // const {reviews} = useContext(ReviewsContext)

  
  // const {updateReview} = useContext(ReviewsContext)
  



 

  const handleSubmit = e => {
    e.preventDefault();
    addReview({comment, gangster_film_id })

    // updateReview({review})

  }
 
// const listGangsterFilms = gangsterFilms.map((gangsterFilm) => 
//    <option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
// );

const listGangsterFilms = gangsterFilms.map((gangsterFilm) => 
   <option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
);

// const handleUpdateReview = reviews.map((review) => review.id === review.id ? 

// );

//first value of my gangsterFilmsList will not populate with the review

  return(
    <div>
      <h3>Review Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gangster_film_id">Select Gangster Film: </label>
        <select name="filmList" id="filmList" onChange={e => setGangsterFilmId(e.target.value)}>{listGangsterFilms}</select>
        
        {/* <label htmlFor="gangster_film_id"></label> */}
        {/* <select> onChange={handleChangeGangsterFilmId} {listGangsterFilms}</select> */}
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <input type="textarea" name="comment" id="comment" value={comment} onChange={handleChangeComment}/>
        </div>
       
        <input type="submit" value="Create Review" />
      </form>
    </div>
    // will handle creating and editing 
  )
}

export default ReviewsForm