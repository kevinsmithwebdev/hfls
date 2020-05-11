import React from 'react'
import './TitleBar.css'

const iLogo = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/images/home/lettertree.png';

const TitleBar = () => (
  <div id='TitleBar'>
    <h1 className='text'>Have Fun Learning Spanish!</h1>
    <div>

      <img
        className='logo-image'
        src={ iLogo }
        alt='site logo - alphabet tree'
      />
    </div>
  </div>
);

export default TitleBar
