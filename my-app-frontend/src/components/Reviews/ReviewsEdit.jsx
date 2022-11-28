import React, {useState} from 'react'
import { useContext } from 'react'
import { useEffect } from 'react';
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
import { ReviewsContext } from '../../context/reviewsContext';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Globals';

const ReviewsEdit = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext);
  const {editReview} = useContext(ReviewsContext);
  const [comment, setComment] = useState("");
  const [gangster_film_id, setGangsterFilmId] = useState("");
 

  const { id } = useParams();

  useEffect(() => {
    fetch(baseUrl + '/reviews/' + id)
      .then(resp => resp.json())
      .then(data => {
        setGangsterFilmId(data.gangster_film_id)
        setComment(data.comment)
      })
  }, [id])

  const handleSubmit = e => {
    e.preventDefault();
    editReview({
      id, 
      comment, 
      gangster_film_id 
    })
  }
 

const listGangsterFilms = gangsterFilms.map((gangsterFilm) => 
   <option value={gangsterFilm.id} key={gangsterFilm.id}>{gangsterFilm.title}</option>
);

  return(
    <div>
      <h3>Edit Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gangster_film_id">Select Gangster Film: </label>
        <select name="filmList" id="filmList" value={gangster_film_id} onChange={e => setGangsterFilmId(e.target.value)}>{listGangsterFilms}</select>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <input type="textarea" name="comment" id="comment" value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
       
        <input type="submit" value="Edit Review" />
      </form>
    </div>
 
  )
}
  
 export default ReviewsEdit