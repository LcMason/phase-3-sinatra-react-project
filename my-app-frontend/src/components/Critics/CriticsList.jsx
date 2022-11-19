import React from 'react'
import { useContext } from 'react'
import { CriticsContext } from '../../context/criticsContext'
import CriticsCard from './CriticsCard'

const CriticsList = () => {
  const { critics } = useContext(CriticsContext)
  
  

  const criticCards = critics.map(critic => <CriticsCard key={critic.id} critic={critic} />)



  return (
    
    <div>
      <h4>Critics List:</h4>
      {criticCards}
    </div>

  )
}

export default CriticsList