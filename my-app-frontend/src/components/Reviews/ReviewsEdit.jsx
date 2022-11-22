import React, {useState} from 'react'
import { useContext } from 'react'
import { useEffect } from 'react';
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
import { ReviewsContext } from '../../context/reviewsContext';
// import { CriticsContext } from '../../context/criticsContext';
import { useHandleChange } from '../../hooks'

const ReviewsEdit = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext);
  const {addReview} = useContext(ReviewsContext);
  // const [comment, handleChangeComment] = useHandleChange("");
  // const [review, handleChangeReview] = useHandleChange("");
  const [loading, setLoading] = useState(true);
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

if(loading) {
  return <div>Loading...</div>
}

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

    
  )
}
  
  
  

 export default ReviewsEdit

/* // import React, { useContext } from 'react'
// import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
// import { ReviewsContext } from '../../context/reviewsContext';
// // import { CriticsContext } from '../../context/criticsContext';
// import { useHandleChange } from '../../hooks'
// // import { Navigate, useNavigate } from 'react-router-dom'; Navigate should be in reviewsContext

// const ReviewsForm = () => { */ 
// /* //   const [comment, handleChangeComment] = useHandleChange("");
// //   const [gangster_film_id, handleChangeFilmId] = useHandleChange("");
// //   // const [review, handleChangeReview] = useHandleReview("");
// //   const { gangsterFilms } = useContext(GangsterFilmsContext)
// //   // const {reviews} = useContext(ReviewsContext)

// //   const {addReview} = useContext(ReviewsContext);
// //   // const {updateReview} = useContext(ReviewsContext)
//    */



 

//   const handleSubmit = e => {
//     e.preventDefault();
//     addReview({comment, gangster_film_id })

//     // updateReview({review})

//   }
 
// const listGangsterFilms = gangsterFilms.map((gangsterFilm) => 
//    <option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
  

// );

// // const handleUpdateReview = reviews.map((review) => review.id === review.id ? 

// // );

// //first value of my gangsterFilmsList will not populate with the review

//   return(
//     <div>
//       <h3>Review Form</h3>
//       <form onSubmit={handleSubmit}>
//         <select name="filmList" id="filmList" defaultValue={gangsterFilms[0].id} onChange={handleChangeFilmId}>{listGangsterFilms}</select>
//         <div>
//           <label htmlFor="comment">Comment:</label>
//           <input type="textarea" name="comment" id="comment" value={comment} onChange={handleChangeComment}/>
//         </div>
       
//         <input type="submit" value="Submit" />
//       </form>
//     </div>