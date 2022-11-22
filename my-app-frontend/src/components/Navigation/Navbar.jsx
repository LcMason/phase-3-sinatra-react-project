import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gangster_films">List Gangster Films</Link></li>
      <li><Link to="/gangster_films/new">Create Gangster Film</Link></li>
      <li><Link to="/reviews">List Reviews</Link></li>
      <li><Link to="/reviews/new">Create Review</Link></li>
      {/* <li><Link to="/reviews/:id/">Reviews Edit</Link></li> */}
      <li><Link to="/critics">List Critics</Link></li>
      <li><Link to="/critics/new">Create Critic Rating</Link></li>
      {/* <li><Link to="/reviews/:id/edit"></Link></li> */}
    </ul>
  )
}

export default Navbar