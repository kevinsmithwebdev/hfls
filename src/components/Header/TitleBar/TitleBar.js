import React from 'react'

import './TitleBar.css'
import iLogo from '../../../assets/images/lettertree.png'

const TitleBar = () => (
  <div id='TitleBar'>
    <div className='title'>
      <div className='start'>
        ¡Have Fun Learning
      </div>
      <div className='end'>
        Spanish!
      </div>
    </div>
    <div className='logo'>
      <img className='logo-image' src={iLogo} alt='site logo - alphabet tree'/>
    </div>
  </div>
)

export default TitleBar
