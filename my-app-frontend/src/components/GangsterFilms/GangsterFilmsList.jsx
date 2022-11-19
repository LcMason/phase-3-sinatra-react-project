import React from 'react'
import {useContext} from 'react'
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext'
// import ReviewsForm from '../Reviews/ReviewsForm'
import GangsterFilmsCard from './GangsterFilmsCard'

export const GangsterFilmsList = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext)
  
 

  // const gangsterFilmCards = gangsterFilms.map((gangsterFilm, i) => <div key={i}>

    // <GangsterFilmsCard  gangsterFilm={gangsterFilm} />

    const gangsterFilmCards = gangsterFilms.map(gangsterFilm => <GangsterFilmsCard key={ gangsterFilm.id } gangsterFilm={ gangsterFilm } />)
    /* <ReviewsForm id={gangsterFilm.id} /> */
  // </div>)



  return (
    <div>
      <h4>List Gangster Films</h4>
      { gangsterFilmCards }
    </div>
  )
}

export default GangsterFilmsList