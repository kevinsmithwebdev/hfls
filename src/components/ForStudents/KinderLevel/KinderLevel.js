import React from 'react';
import Vocales from './Vocales/Vocales';
import VowelGame from './VowelGame/VowelGame';
import './KinderLevel.css';

const KinderLevel = () => {
  return (
    <div className='KinderLevel'>
      <Vocales />
      <VowelGame />
    </div>
  );
};

export default KinderLevel;
