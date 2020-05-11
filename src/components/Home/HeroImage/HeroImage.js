import React from 'react'
import './HeroImage.css'
const imgTeaching = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/images/home/roxTeaching.jpg';

const HeroImage = () => (
  <div id='HeroImage'>
    <img className='img' src={ imgTeaching } alt='teacher teaching children' />
  </div>
);

export default HeroImage;
