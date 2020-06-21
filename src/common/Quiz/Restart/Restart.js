import React from 'react';
import './Restart.css';

const Restart = ({ isAnswered, isCorrect, resetQuiz }) => {
  const message = isCorrect ? 'Play Again' : 'Start Over';

  return (
    <button
      className='Restart'
      disabled={ !isAnswered }
      onClick={ resetQuiz }
    >
      { message }
    </button>
  );
};

export default Restart;
