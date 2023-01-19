import React from 'react'
import './Child.css'

function Child({ name, onClicked }) {
  return (
    <div className='child'>
      <button className='childButton' onClick={() => onClicked(name)}>
        {name}
      </button>
    </div>
  )
}

export default Child