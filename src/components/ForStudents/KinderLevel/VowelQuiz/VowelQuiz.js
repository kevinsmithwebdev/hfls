import React, { useState } from 'react';
import Quiz from '../../../../common/Quiz/Quiz';
import { vowelQuizData } from '../kinderData';
import './VowelQuiz.css';

const getRandomCurrent = () => Math.floor(Math.random() * vowelQuizData.choices.length);

const setNewAnswerIndex = setAnswerIndex => setAnswerIndex(getRandomCurrent());

const VowelQuiz = () => {
  const [answerIndex, setAnswerIndex] = useState(getRandomCurrent());
  return (
    <div className='VowelQuiz'>
      <h2>Vowel Quiz</h2>
      <Quiz
        resetAnswer={ () => setNewAnswerIndex(setAnswerIndex) }
        data={ vowelQuizData }
        answerIndex={ answerIndex }
      />
    </div>
  );
};

export default VowelQuiz;