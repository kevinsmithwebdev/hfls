import React from 'react';

import './FrontCards.css';

const iLogo = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/images/home/lettertree.png';

const FrontCards = () => (
  <div id='FrontCards'>
    <div className='outer-wrapper outer-wrapper1'>
      <div className='inner-wrapper card-wrapper'>
        <div>
        <h2>This program is for you if…</h2>
          <ul>
            <li>You teach Spanish in elementary schools, not in a daily basis.</li>
            <li>You are a private tutor or teach Spanish in after school programs.</li>
          </ul>
        </div>
        <div>
          <img
            className='logo-image'
            src={ iLogo }
            alt='site logo - alphabet tree'
          />
        </div>
      </div>
    </div>
  </div>
);

export default FrontCards;
