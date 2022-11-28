import React from 'react'
// import { baseUrl } from '../../Globals'

const GangsterFilmsCard = ({gangsterFilm}) => {

  

  // const handleClick = () => {
  //   fetch(baseUrl + '/reviews/' + review.id, {
  //     method: "DELETE",
  //   })
  //     .then(resp => resp.json())
  //     .then((data) => {
  //       console.log('review deleted')
  //       //remove from ReviewState
  //       //remove from GangsterFilm state
  //     })
  //     removeReview();
  //     removeGangsterFilm();
  // }



  return (
    <div>
      <h2>{ gangsterFilm.title} </h2>
      <h6>{ gangsterFilm.genre} </h6>
      <h4>{ gangsterFilm.director} </h4>
      <h3>{ gangsterFilm.description} </h3>
      
      { gangsterFilm.reviews.length > 0 && 
      <>
        <div>Reviews: {gangsterFilm.reviews.map((review, i) => <p key={i}>{review.comment}</p>)}</div> 
      </>
      }
    </div>
  )
}

export default GangsterFilmsCard