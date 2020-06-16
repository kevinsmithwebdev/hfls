import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './Vocales.css';

const prefix = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/forStudents/kinder/vocales/';

const vowels = [
  { letter: 'a', word: 'abeja' },
  { letter: 'e', word: 'elefante' },
  { letter: 'i', word: 'iguana' },
  { letter: 'o', word: 'oso' },
  { letter: 'u', word: 'unicornio' },
];

const vocales = vowels.map(({ letter, word }) => ({
    letter,
    letterSoundUrl: `${prefix}${letter}.mp3`,
    letterImageUrl: `${prefix}${letter}.png`,
    wordSoundUrl: `${prefix}${word}.mp3`,
    wordImageUrl: `${prefix}${word}.png`,
}));

const Vocal = ({ vocal: { letter, letterImageUrl, letterSoundUrl, wordSoundUrl, wordImageUrl }, idx }) => {
  const title = `Letra - ${letter.toUpperCase()} / ${letter.toLowerCase()}`;
  const letterAudio = new Audio(letterSoundUrl);
  const wordAudio = new Audio(wordSoundUrl);
  const letterAlt = `image for letter ${ letter }`;
  const wordAlt = `image for word that starts with ${ letter }`;

  return (
    <div className={ `Vocal outer-wrapper outer-wrapper${idx % 2}` }>
      <div className='inner-wrapper'>
        <h3 className='title'>{ title }</h3>
        <div>
          <h4 className='subtitle'>Hear the Letter</h4>
          <div className='letterButtonWrapper'>
            <img className='letterImage' src={ letterImageUrl } alt={ letterAlt } />
            <button
              className='soundButton'
              onClick={ () => letterAudio.play() }
            >
              <FontAwesomeIcon icon={ faVolumeUp } size='2x' />
            </button>
          </div>
        </div>

        <div>
          <h4 className='subtitle'>Hear It in a Word</h4>
          <div className='letterButtonWrapper'>
            <img className='wordImage' src={ wordImageUrl } alt={ wordAlt } />
            <button
              className='soundButton'
              onClick={ () => wordAudio.play() }
            >
              <FontAwesomeIcon icon={ faVolumeUp } size='2x' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vocales = () => {
  return (
    <div className='Vocales'>
      <h2>Las Vocales</h2>
      { vocales.map((vocal, idx) => <Vocal key={ vocal.letter } vocal={ vocal } idx={ idx } />) }
    </div>
  );
};

export default Vocales;