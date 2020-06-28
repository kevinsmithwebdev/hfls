import React, { useState } from 'react';
import Quiz from '../../../../common/Quiz/Quiz';
import { vowelQuizData } from '../kinderData';
import './VowelGame.css';

const getRandomCurrent = () => Math.floor(Math.random() * vowelQuizData.choices.length);

const setNewAnswerIndex = setAnswerIndex => setAnswerIndex(getRandomCurrent());

const VowelQuiz = () => {
  const [answerIndex, setAnswerIndex] = useState(getRandomCurrent());
  return (
    <div className='VowelQuiz'>
      <h2>Vowel Game</h2>
      <Quiz
        resetAnswer={ () => setNewAnswerIndex(setAnswerIndex) }
        data={ vowelQuizData }
        answerIndex={ answerIndex }
      />
    </div>
  );
};

export default VowelQuiz;