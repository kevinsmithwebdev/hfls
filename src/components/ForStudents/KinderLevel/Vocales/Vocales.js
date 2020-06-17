import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Phonic from './Phonic/Phonic';
import './Vocales.css';

const prefix = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/forStudents/kinder/vocales/';

const vowels = [
  { letter: 'a', word: 'abeja', phonic: { syllables: ['ah', 'BAY', 'hah'], highlights: [1] } },
  { letter: 'e', word: 'elefante', phonic: { syllables: ['ay', 'ley', 'FAHN', 'tey'], highlights: [0, 1, 3] } },
  { letter: 'i', word: 'iguana', phonic: { syllables: ['ee', 'GWAH', 'nah'], highlights: [0] } },
  { letter: 'o', word: 'oso', phonic: { syllables: ['O', 'so'], highlights: [0, 1] } },
  { letter: 'u', word: 'unicornio', phonic: { syllables: ['oo', 'nee', 'COR', 'nyo'], highlights: [0] } },
];

const vocales = vowels.map(({ letter, word, phonic }) => ({
    letter,
    letterSoundUrl: `${prefix}${letter}.mp3`,
    letterImageUrl: `${prefix}${letter}.png`,
    phonic,
    wordSoundUrl: `${prefix}${word}.mp3`,
    wordImageUrl: `${prefix}${word}.png`,
}));

const Vocal = ({ vocal: { letter, letterImageUrl, letterSoundUrl, wordSoundUrl, wordImageUrl, phonic }, idx }) => {
  console.log('asdf', phonic);
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
          <Phonic phonic={ phonic } />
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