import React from 'react'
import {useContext} from 'react'
import { GangsterFilmsContext } from '../../context/gangsterFilmsContext'
import GangsterFilmsCard from './GangsterFilmsCard'

export const GangsterFilmsList = () => {
  const { gangsterFilms } = useContext(GangsterFilmsContext)
  
    const gangsterFilmCards = gangsterFilms.map(gangsterFilm => <GangsterFilmsCard key={ gangsterFilm.id } gangsterFilm={ gangsterFilm } />)
 
  return (
    <div>
      <h4>List Gangster Films</h4>
      { gangsterFilmCards }
    </div>
  )
}

export default GangsterFilmsList