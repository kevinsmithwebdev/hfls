import React, { Fragment } from 'react';
import './Word.css';

const renderWord = (syllable, idx) => {
  const isFirst = idx === 0;
  return (
    <Fragment key={ `word-wrapper-${idx}` }>
      { !isFirst && <span className='bold' >·</span> }
      <span className='syllable'>
        { syllable }
      </span>
    </Fragment>
  );
}

const Word = props => {
  const { wordSyllables } = props;
  return (
    <div className='Word'>
      { wordSyllables.map((syllable, idx) => renderWord(syllable, idx)) }
    </div>
  );
};

export default Word;
