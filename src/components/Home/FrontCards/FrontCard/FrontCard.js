import React from 'react'

import './FrontCard.css';

const FrontCard = ({ title, body }, idx) => {
  const className = `outer-wrapper outer-wrapper${ idx % 2 }`;
  return (
    <div
      key={ idx }
      className={ className }
    >
      <div className='inner-wrapper'>
        { title }
        { body }
      </div>
    </div>
  )
};

export default FrontCard