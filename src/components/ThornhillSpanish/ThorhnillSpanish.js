import React from 'react';
// import SignupForm from './SignupForm/Signup.form';
import './ThornhillSpanish.css';

const FormDownload = () => (
  <div className='formDownload'>
    <div style={ { textAlign: 'center', padding: '5px' } }>
      <span className='linksLabel'>Download a Registration Form:</span>
      <a className='link' href='https://kswd-hfls-site.s3-us-west-1.amazonaws.com/regestration/registration.pdf' download>PDF</a>
      <a className='link' href='https://kswd-hfls-site.s3-us-west-1.amazonaws.com/regestration/registration.docx' download>Word</a>
    </div>
    <span style={ { textAlign: 'center', padding: '5px' } }>Email completed form to thorhillspanish@yahoo.com</span>
  </div>
)

const ThorhhillSpanish = () => {
  return (
    <div className='ThornhillSpanish' style={ { padding: '10px' } }>
      {/* <SignupForm /> */}

      <h2>Have Fun Leaning Spanish at Thornhill Elementary</h2>
      <p>This is a one-year language program for elementary students. All students are welcome whether you have participated in this program before or not.</p>

      <FormDownload />

      <p>Classes are divided into levels:</p>
      <ul>
        <li><b>TK</b> - transitional kindergarten students</li>
        <li><b>Kinder</b> - kindergarten students</li>
        <li><b>Beginner</b> - first grade students</li>
        <li><b>Intermediate</b> - second and third grade</li>
        <li><b>Advanced</b> - fourth and fifth grade</li>
      </ul>
      <p>If you are not sure what level is appropriate, please email me at thorhillspanish@yahoo.com</p>

      <h3>Covid and Distance Learning</h3>
      <p>Due to the current situation, the OUSD will be starting the school year remotely. How we teach will be adjusted accordingly. If and when Thornhill returns to normal, in-person instruction, we will also be doing our Spanish program before and after school on site.</p>

      <h3>Level Descriptions</h3>
      <h4>TK</h4>
      <p>We introduce Spanish through songs and handcraft activities to help the students develop motor skills. At the same time they familiarized with the Spanish Language. Students sing songs, make cards, cut shapes, design toys, draw pictures, watch Spanish videos, and much more to learn about the Spanish language and its culture.</p>

      <h4>Kinder</h4>
      <p>We introduce Spanish through songs and handcraft activities. At the same time they familiarized with the Spanish Language. Students sing songs, make cards, play interactive games, design toys, draw pictures, watch Spanish videos, and much more to learn about the Spanish language and its culture.</p>

      <h4>Beginner</h4>
      <p>We focus on developing reading and comprehension skills as well as developing near-native pronunciation and practical speaking skills in specific contexts: restaurants, meals, at the supermarket, in school, etc.</p>

      <h4>Intermediate</h4>
      <p>We focus on developing conversational skills in new contexts, like school, lunch-time, holidays, etc. We build vocabulary and improve reading comprehension skills.</p>

      <h4>Advanced</h4>
      <p>This class is designed for students have been learning Spanish for at least 3 years. The students are introduced to common conversation topics like at a restaurant, in school, sports, languages, etc. We also introduce grammar and keep reinforcing reading comprehension skills and vocabulary.</p>

      <h3>Fees and Times</h3>
      <p>We will meet at that virtual times through Zoom meetings while we are still in our Covid situation. When we begin meeting in person again, we will transition to the in-person class times. We will all have to be flexible in these difficult times.</p>
      <p>Some levels have books - you will be sent a link to order the correct books online.</p>
      <p>The fees are for the entire school year. TK level meets once a week and all other classes meet twice a week.</p>
      <p></p>

      <table className='FEES'>
        <tr>
          <th>Level</th>
          <th>Fee</th>
          <th>Virtual</th>
          <th>In-Person</th>
          <th>Books</th>
        </tr>
        <tr>
          <td>TK</td>
          <td>$500</td>
          <td>Fri 2-2:30</td>
          <td>Fri 2-2:30</td>
          <td>none</td>
        </tr>
        <tr>
          <td>Kinder</td>
          <td>$800</td>
          <td>Tue & Thu 2-2:30</td>
          <td>Tue & Thu 2:20-2:30</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Beginner</td>
          <td>$800</td>
          <td>Mon 3:30-4 & Wed 2-2:30</td>
          <td>Mon 3-4 & Wed 1:30-2:30</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Intermediate</td>
          <td>$800</td>
          <td>Tue & Thu 4-4:30 <b>PM</b></td>
          <td>Tue & Thu 7:50-8:30 <b>AM</b></td>
          <td>1</td>
        </tr>
        <tr>
          <td>Advanced</td>
          <td>$800</td>
          <td>Mon & Wed 4-4:30 <b>PM</b></td>
          <td>Mon & Wed 7:50-8:30 <b>AM</b></td>
          <td>2</td>
        </tr>
      </table>
      <div style={ { padding: '20px 0 10px 0' } }>
        <FormDownload />
      </div>
    </div>
  );
};

export default ThorhhillSpanish;