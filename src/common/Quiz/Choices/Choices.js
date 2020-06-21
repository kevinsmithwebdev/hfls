import React from 'react';
import './Choces.css';

const renderButton = ({ label }, idx, setCurrentGuessIndex, currentGuessIndex, isCorrect) => {
  const disabled = isCorrect;
  let buttonClass = 'choiceButton';

  if(isCorrect && currentGuessIndex === idx) {
    buttonClass = 'choiceButton correctButton'
  } else if (currentGuessIndex === idx && currentGuessIndex !== null) {
    buttonClass = 'choiceButton incorrectButton'
  }

  return (
    <button
      className={ buttonClass }
      disabled={ disabled }
      onClick={ () => setCurrentGuessIndex(idx) }
    >
      { label }
    </button>
  );
}

const Choices = ({ choices, setCurrentGuessIndex, currentGuessIndex, isCorrect }) => {
  return (
    <div className='Choices'>
      { choices.map((c, idx) => renderButton(c, idx, setCurrentGuessIndex, currentGuessIndex, isCorrect)) }
    </div>
  );
};

export default Choices;
