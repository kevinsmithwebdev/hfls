import React from 'react'
import './HeroImage.css'
import imgTeaching from '../../../assets/images/teaching.jpg'; 

const HeroImage = () => (
  <div id='HeroImage'>
    <img className='img' src={ imgTeaching } alt='teacher teaching children' />
  </div>
);

export default HeroImage;
