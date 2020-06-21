import React from 'react';
import './Feedback.css';

const Feedback = ({ isAnswered, isCorrect }) => {
  let message = 'Select the correct answer.';
  let messageClass = 'message noGuess';

  if (isAnswered && isCorrect) {
    message = 'Great! Answer correct!';
    messageClass = 'message correctGuess';
  } else if (isAnswered && !isCorrect) {
    message = 'Sorry, try again.';
    messageClass = 'message incorrectGuess';
  }

  return (
    <div className='Feedback' >
      <span className={ messageClass } >
        { message }
      </span>
    </div>
  );
};

export default Feedback;
