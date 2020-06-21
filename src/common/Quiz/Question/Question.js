import React from 'react';
import SoundButton from '../../../common/SoundButton/SoundButton';

const Question = ({ question, answer }) => {
  return (
    <div>
      <h4>{ question }</h4>
      <SoundButton soundUrl={ answer.choiceSound } />
    </div>
  );
};

export default Question;
