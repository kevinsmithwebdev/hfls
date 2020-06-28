import React, { Fragment } from 'react';
import './Phonic.css';

const renderWord = (syllable, isHighlighted, idx) => {
  const isFirst = idx === 0;
  return (
    <Fragment key={ `phonic-wrapper-${idx}` }>
      { !isFirst && <span className='bold' >·</span> }
      <span className={ isFirst ? 'syllable highlighted' : 'syllable' } >
        { syllable }
      </span>
    </Fragment>
  );
}

const Phonic = props => {
  const { phonic: { syllables, highlights } } = props;
  return (
    <div className='Phonic'>
      <span className='syllable bold'>/</span>
      { syllables.map((syllable, idx) => renderWord(syllable, highlights.includes(idx), idx)) }
      <span className='syllable bold'>/</span>
    </div>
  );
};

export default Phonic;
