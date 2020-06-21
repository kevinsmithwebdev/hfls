import React, { useState } from 'react';
import Choices from './Choices/Choices';
import Feedback from './Feedback/Feedback';
import Question from './Question/Question';
import Restart from './Restart/Restart';
import './Quiz.css';

const resetQuiz = (resetAnswer, setCurrentGuessIndex) => {
  resetAnswer();
  setCurrentGuessIndex(null);
}

const Quiz = ({ data, answerIndex, resetAnswer }) => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(null);

  const isAnswered = currentGuessIndex !== null;
  const isCorrect = currentGuessIndex === answerIndex ;

  return (
    <div className='Question'>
      <Question
        answer={ data.choices[answerIndex] }
        question={ data.question }
      />

      <Choices
        choices={ data.choices }
        currentGuessIndex={ currentGuessIndex }
        isCorrect={ isCorrect }
        setCurrentGuessIndex={ setCurrentGuessIndex }
      />

      <Feedback
        isAnswered={ isAnswered }
        isCorrect={ isCorrect }
      />

      <Restart
        isAnswered={ isAnswered }
        isCorrect={ isCorrect }
        resetQuiz={ () => resetQuiz(resetAnswer, setCurrentGuessIndex) }
      />

    </div>
  );
};

export default Quiz;