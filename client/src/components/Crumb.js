import React from 'react'
import './Crumb.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Crumb({ pathTo, name, onClicked}) {
  return (
    <div className='crumb'>
      <button className='crumbButton' onClick={() => onClicked(pathTo)}>
        {name.replace(/"/g,"")}
      </button>
      <PlayArrowIcon />
    </div>
  )
}

export default Crumb