import React from 'react'
import HeroImage from './HeroImage/HeroImage';
import FrontCards from './FrontCards/FrontCards';
import './Home.css'

const Home = () => (
  <div id='Home'>
    <div className='outer-wrapper outer-wrapper0'>
      <div className='inner-wrapper'>
        <HeroImage />
      </div>
    </div>

    <FrontCards/>
  </div>
);

export default Home
