import React from 'react';
import Vocales from './Vocales/Vocales';
import VowelQuiz from './VowelQuiz/VowelQuiz';
import './KinderLevel.css';

const KinderLevel = () => {
  return (
    <div className='KinderLevel'>
      <Vocales />
      <VowelQuiz />
    </div>
  );
};

export default KinderLevel;
