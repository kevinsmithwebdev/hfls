import React from 'react';
import FrontCard from './FrontCard/FrontCard';
import cardList from './cards.data';

import './FrontCards.css';

const FrontCards = () => (
  <div id='FrontCards'>
    { cardList.map(FrontCard) }
  </div>
);

export default FrontCards;
