import React from 'react'
import Base from '../Base/Base'

function Cards() {
  return (
    <Base
    title={"Cards Details"}
    >
    <div className='cards'>
      
      <input
        placeholder='Enter the Id of Student'
        type='text'
        />
        <h1>Cards</h1>
    </div>
    </Base>
  )
}

export default Cards