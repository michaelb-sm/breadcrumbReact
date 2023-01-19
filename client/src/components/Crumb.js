import React from 'react'
import './Crumb.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Crumb({ pathIndex, name, onClicked}) {
  return (
    <div className='crumb'>
      <button className='crumbButton' onClick={() => onClicked(pathIndex)}>
        {name.replace(/"/g,"")}
      </button>
      <PlayArrowIcon />
    </div>
  )
}

export default Crumb