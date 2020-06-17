import React, { Fragment } from 'react';
import './Phonic.css';

const renderWord = (syllable, isHighlighted, isFirst) => {
  console.log('asdf3', syllable, isHighlighted, isFirst);
  return (
    <Fragment>
      { !isFirst && <span className='bold'> · </span> }
      <span className={ isHighlighted ? 'syllable highlighted' : 'syllable' }>
        { syllable }
      </span>
    </Fragment>
  );
}

const Phonic = props => {
  const { phonic: { syllables, highlights } } = props;
  console.log('asdf2', syllables);
  return (
    <div className='Phonic'>
      <span className='syllable bold'>/ </span>
      { syllables.map((syllable, idx) => renderWord(syllable, highlights.includes(idx), idx === 0)) }
      <span className='syllable bold'> /</span>
    </div>
  );
};

export default Phonic;
