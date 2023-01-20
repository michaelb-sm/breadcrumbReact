import React from 'react'
import './Child.css'

function Child({ pathToParent, name, onClicked }) {
  return (
    <div className='child'>
      <button className='childButton' onClick={() => onClicked(pathToParent, name)}>
        {name}
      </button>
    </div>
  )
}

export default Child