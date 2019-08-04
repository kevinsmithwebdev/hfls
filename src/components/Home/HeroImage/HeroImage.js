import React from 'react'
import './HeroImage.css'
import imgTeaching from '../../../assets/images/home/roxTeaching.jpg'; 

const HeroImage = () => (
  <div id='HeroImage'>
    <img className='img' src={ imgTeaching } alt='teacher teaching children' />
  </div>
);

export default HeroImage;
