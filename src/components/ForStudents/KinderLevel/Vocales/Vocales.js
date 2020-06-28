import React from 'react';
import './Vocales.css';
import { vocales } from '../kinderData';
import Vocal from './Vocal/Vocal';

const Vocales = () => {
  return (
    <div className='Vocales'>
      <h2>Las Vocales</h2>
      { vocales.map((vocal, idx) => <Vocal key={ vocal.letter } vocal={ vocal } idx={ idx } />) }
    </div>
  );
};

export default Vocales;
