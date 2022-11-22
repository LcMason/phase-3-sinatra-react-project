// import React from 'react'
// import { useHandleChange } from '../../hooks';




// const CriticsForm = () => {
//   const [rating, handleChangeRating] = useHandleChange(0);
  
//   return (
//     <div>
//       <h3>Create Rating</h3>
//       <form>

//       </form>
//     </div>
//   )
// }

// export default CriticsForm



import React, { useContext } from 'react'
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
// import { ReviewsContext } from '../../context/reviewsContext';
import { CriticsContext } from '../../context/criticsContext';
import { useHandleChange } from '../../hooks'
// import { Navigate, useNavigate } from 'react-router-dom'; Navigate should be in reviewsContext

const ReviewsForm = () => {
  const [rating, handleChangeRating] = useHandleChange("");
  const { gangsterFilms } = useContext(GangsterFilmsContext)

  const {addCritic} = useContext(CriticsContext);
 
  const handleSubmit = e => {
    e.preventDefault();

    addCritic({rating})

  }
 
const listGangsterFilms = gangsterFilms.map((gangsterFilm) =>
<option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
);

  return(
    <div>
      <h3>Review Form</h3>
      <form onSubmit={handleSubmit}>
        <select name="filmList" id="filmList">{listGangsterFilms}</select>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" name="rating" id="rating" value={rating} onChange={handleChangeRating}/>
        </div>
       
        <input type="submit" value="Submit" />
      </form>
    </div>
    // will handle creating and editing 
  )
}

export default ReviewsForm