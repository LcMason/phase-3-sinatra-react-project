import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/gangster_films">List Gangster Films</Link></li>
      <li><Link to="/gangster_films/new">Create Gangster Film</Link></li>
      <li><Link to="/reviews">List Reviews</Link></li>
      <li><Link to="/reviews/new">Create Review</Link></li>
    </ul>
  )
}

export default Navbar