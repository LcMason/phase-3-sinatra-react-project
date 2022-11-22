import React from 'react'

const GangsterFilmsCard = ({gangsterFilm}) => {

  

  return (
    <div>
      <h2>{ gangsterFilm.title} </h2>
      <h6>{ gangsterFilm.genre} </h6>
      <h4>{ gangsterFilm.director} </h4>
      <h3>{ gangsterFilm.description} </h3>
      
      { gangsterFilm.reviews.length > 0 && 
      <>
        <div>Reviews: {gangsterFilm.reviews.map((review, i) => <p key={i}>{review.comment}</p>)}</div> 
        <div>Rating: {gangsterFilm.critics.map((critic, i) => <p key={i}>{critic.rating}</p>)}</div> 
      </>
      }
      {/* .reviews is a child of gangsterFilm */}
    </div>
  )
}

export default GangsterFilmsCard