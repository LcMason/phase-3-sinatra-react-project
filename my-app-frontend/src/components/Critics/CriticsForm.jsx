import React from 'react'
import { useHandleChange } from '../../hooks';




const CriticsForm = () => {
  const [rating, handleChangeRating] = useHandleChange(0);
  
  return (
    <div>
      <h3>Create Rating</h3>
      <form>

      </form>
    </div>
  )
}

export default CriticsForm



