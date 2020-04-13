import React from 'react';

const backgroundColor = '#ddd';
const color = '#222';

export default [
  {
    index: 'card-00',
    title: <h3>This program is suitable for your class if:</h3>,
    body: (
      <ul>
        <li>You are tired of gathering material from different books in order to teach.</li>
        <li>You want to teach Spanish as native Spanish speakers learn the language, introducing students to speaking and reading as a base to acquire a solid foundation.</li>
        <li>You want your students to play games, move, run, sing, eat, etc., and have fun while learning Spanish to keep them engage so they can pursuit a further education in the Spanish language.</li>
      </ul>
    ),
    backgroundColor,
    color,
    height: 450,
    vertOffset: 50,
  },
  {
    index: 'card-01',
    title: <h3>Are you a Spanish teacher <i>with or without experience</i>, who wants to show your students that learning Spanish is fun?</h3>,
    body: (
      <h4 className='mainText'><b><i>Have Fun Learning Spanish</i></b> is a course designed for elementary school children with little or no previous exposure to the Spanish language and who are interested in learning Spanish in school.</h4>
    ),
    color,
    backgroundColor,
    height: 400,
    vertOffset: 100,
  },
  {
    index: 'card-02',
    title: <h3>The series of books <i>Have Fun Learning Spanish</i> is the result of more than 15 years of teaching Spanish to elementary school children.</h3>,
    body: (
      <h4 className='mainText'>The books have been tested several times and the content of each book is the compilation of the student’s suggestions gathered throughout these years of teaching. This series is a work in progress and Roxana is constantly developing new textbooks, songs to reinforce what has been learned, bilingual stories, and online material for teachers and students.</h4>
    ),
    backgroundColor,
    color,
    height: 500,
    vertOffset: 0,
  },
];