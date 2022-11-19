import React from 'react'

const CriticsCard = ({critic}) => {

  

  return (
    <div>
     
     
      <div>Gangster Film: {critic.gangsterFilms?.map((gangsterFilm, i) => <p key={i}>{gangsterFilm.title}</p>)}</div>
      <h4>{ critic.rating }</h4>
    </div>
  )
}

export default CriticsCard