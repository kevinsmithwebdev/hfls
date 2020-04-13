import React, { useState } from 'react';
import Lect from './Lect/Lect';
import Player from './Player/Player';
import './Lector.css';

const TIMECODE_FUDGE = 0.1;

const getShouldHighlight = (lect, readTime) => (lect.start - TIMECODE_FUDGE) <= readTime && readTime <= (lect.end + TIMECODE_FUDGE);


const renderLect = (lect, idx, readTime) => {
  const shouldHighlight = getShouldHighlight(lect, readTime);
  const key = idx;
  return <Lect lect={ lect } shouldHighlight={ shouldHighlight } key={ key } readTime={ readTime } />
};

const renderParagraph = ({ header, lects }, idx, readTime) => (
  <div className='paragraph' key={ idx }>
    <div className='Lectorem-paragraph-header'>
      <div>
        <img src={header.imagePath} alt='Logo' width='150px' />
      </div>
      { header.lects.map((lect, idx) => renderLect(lect, idx, readTime)) }
    </div>
    <div>
      { lects.map((lect, idx) => renderLect(lect, idx, readTime)) }
    </div>
  </div>
);

const renderParagraphs = (paragraphs, readTime) =>
  paragraphs.map((paragraph, idx) => renderParagraph(paragraph, idx, readTime));

const Lectorem = ({ data }) => {
  const [readTime, setReadTime] = useState(0);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { title, subtitle, audioPath } = data;
  return (
    <div className='Lectorem'>
      { !!title && <h2>{ title } </h2> }
      { !!subtitle && <h3>{ subtitle } </h3> }
      <div className='playerContainer'>
        <Player
          audioPath={ audioPath }
          onListen={ setReadTime }
        />
      </div>
      <div className='lectsContainer'>
        { renderParagraphs(data.paragraphs, readTime) }
      </div>
    </div>
  );
}

export default Lectorem;
