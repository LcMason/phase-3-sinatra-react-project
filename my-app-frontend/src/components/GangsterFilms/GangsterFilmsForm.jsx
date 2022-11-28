import React, { useContext } from 'react'
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext';
import { useHandleChange } from '../../hooks'

const GangsterFilmsForm = () => {
  const [title, handleChangeTitle] = useHandleChange("");
  const [genre, handleChangeGenre] = useHandleChange("");
  const [director, handleChangeDirector] = useHandleChange("");
  const [description, handleChangeDescription] = useHandleChange("");
 


  const {addGangsterFilm} = useContext(GangsterFilmsContext);

  const handleSubmit = e => {
    e.preventDefault();

    addGangsterFilm({title, genre, director, description})

  }

  return(
    <div>
      <h3>Gangster Films Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" value={title} onChange={handleChangeTitle}/>
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" name="genre" id="genre" value={genre} onChange={handleChangeGenre}/>
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input type="text" name="diretor" id="director" value={director} onChange={handleChangeDirector}/>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description" value={description} onChange={handleChangeDescription}/>
        </div>
       
        <input type="submit" value="Submit" />
      </form>
    </div>
   
  )
}

export default GangsterFilmsForm