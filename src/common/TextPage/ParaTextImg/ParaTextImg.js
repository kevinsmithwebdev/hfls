import React from 'react'

import './ParaTextImg.css'

const ParaTextImg = ({ text, img, imgFloat, imgHeight }) => {
  let imageClass = 'image-right'
  if (imgFloat==='left')
    imageClass = 'image-left'

  return (
    <div id='PageTextImg'>
      { (img)
        ? <img className={imageClass} src={img} alt={img} height={imgHeight} width='auto'/>
        : null
      }
      <p className='text'>
        {text}
      </p>
    </div>
  )
}

export default ParaTextImg
