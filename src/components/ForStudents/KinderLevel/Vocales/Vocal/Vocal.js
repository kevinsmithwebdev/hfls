import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Phonic from './Phonic/Phonic';
import Word from './Word/Word';
import './Vocal.css';

const renderSoundButton = audio => (
  <button
    className='soundButton'
    onClick={ () => audio.play() }
  >
    <FontAwesomeIcon icon={ faVolumeUp } />
  </button>
)

const Vocal = ({ vocal: { letter, letterImageUrl, letterSoundUrl, wordSoundUrl, wordImageUrl, phonic, wordSyllables }, idx }) => {
  const letterAudio = new Audio(letterSoundUrl);
  const wordAudio = new Audio(wordSoundUrl);
  const letterAlt = `image for letter ${ letter }`;
  const wordAlt = `image for word that starts with ${ letter }`;

  return (
    <div className={ `Vocal outer-wrapper outer-wrapper${idx % 2}` }>
      <div className='inner-wrapper box-wrapper'>
        <div className='box box-left'>
          <div className='box-side-column'>
            { renderSoundButton(letterAudio) }
          </div>
          <div className='letterButtonWrapper'>
            <img className='letterImage' src={ letterImageUrl } alt={ letterAlt } />
          </div>
          <div className='box-side-column' />
        </div>

        <div className='box box-right'>
          <div className='box-side-column'>
            { renderSoundButton(wordAudio) }
          </div>
          <div className='letterButtonWrapper'>
            <img className='wordImage' src={ wordImageUrl } alt={ wordAlt } />
            <Word wordSyllables={ wordSyllables } />
            <Phonic phonic={ phonic } />
          </div>
          <div className='box-side-column' />
        </div>
      </div>
    </div>
  );
};

export default Vocal;