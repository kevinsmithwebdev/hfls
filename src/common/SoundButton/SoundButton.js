import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './SoundButton.css';

const SoundButton = ({ soundUrl }) => {
  const audioPlayer = new Audio(soundUrl);
  return (
    <button
      className='SoundButton'
      onClick={ () => audioPlayer.play() }
    >
      <FontAwesomeIcon icon={ faVolumeUp } size='2x' />
    </button>
  );
};

export default SoundButton;