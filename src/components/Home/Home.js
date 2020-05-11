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

    <div className='outer-wrapper outer-wrapper1'>
      <div className='inner-wrapper text-column'>
        <h2>This program is for you if…</h2>
        <ul>
          <li>You teach Spanish in elementary schools, not in a daily basis.</li>
          <li>You are a private tutor or teach Spanish in after school programs.</li>
        </ul>
      </div>
    </div>
    <FrontCards/>
  </div>
);

export default Home
