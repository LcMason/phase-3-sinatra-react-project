import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
import { ReviewsContext } from '../../context/reviewsContext';
import { useHandleChange } from '../../hooks'

const ReviewsForm = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext);
  const {addReview} = useContext(ReviewsContext);
  const [comment, handleChangeComment] = useHandleChange("");
  const [gangster_film_id, setGangsterFilmId] = useState("");

  useEffect(() => {
    if(gangsterFilms.length > 0) {
      setGangsterFilmId(gangsterFilms[0].id)
    }
  }, [gangsterFilms])

  const handleSubmit = e => {
    e.preventDefault();
    addReview({comment, gangster_film_id })
  }
 
const listGangsterFilms = gangsterFilms.map((gangsterFilm) => 
   <option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
);

  return(
    <div>
      <h3>Review Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gangster_film_id">Select Gangster Film: </label>
        <select name="filmList" id="filmList" onChange={e => setGangsterFilmId(e.target.value)}>{listGangsterFilms}</select>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <input type="text" name="comment" id="comment" value={comment} onChange={handleChangeComment}/>
        </div>
       
        <input type="submit" value="Create Review" />
      </form>
    </div>
  )
}

export default ReviewsForm