import React from 'react';
import { emailRoxana } from '../../constants/constants';
import './Lessons.css';

const text1 = `
As a native Spanish speaker, with decades of teaching experience, a BA in Spanish Linguistics and Literature,
an MA in Applied Linguistics, and a graduate diploma in translation and interpretation,
I enjoy teaching Spanish to people of all ages and levels.`;

const text2 = `
If you live in the area, we can meet in person.
If not, then I would love to meet you online.
I can work with individuals or with small groups.`;

const text3 = `
Please send me an email so we can discuss how I can help you
on your Spanish learning journey.`;

const Lessons = () => {
  return (
    <div id='Lessons'>
      <div className='outer-wrapper outer-wrapper0'>
        <div className='inner-wrapper'>
          <h2>Spanish Lessons</h2>
        </div>
      </div>
      <div className='outer-wrapper outer-wrapper1'>
        <div className='inner-wrapper'>
          <p> { text1 } </p>
          <p> { text2 } </p>
          <p> { text3 } </p>
        </div>
      </div>
      <div className='outer-wrapper outer-wrapper0'>
        <div className='inner-wrapper link-wrapper' >
          <a href={ `mailto: ${ emailRoxana }` } >
            { emailRoxana }
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lessons;