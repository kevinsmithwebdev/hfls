import React from 'react';
import { connect } from 'react-redux';
import './LevelSelector.css'
import { selectLevelAC } from '../../redux/reducers/level/reducer';

const mapStateToProps = state => ({
  selectedLevel: state.level.selected,
});

const mapDispatchToPros = {
  dispatchChangeSelectedLevel: selectLevelAC,
};

const levels = [
  'Kinder',
  'Beginner',
  // 'Intermediate',
  // 'Advanced',
];

const renderLevelButton = (level, selectedLevel, dispatchChangeSelectedLevel) => {
  const classString = level.toLowerCase() === selectedLevel ? 'levelButton selectedLevelButton' : 'levelButton';
  return (
    <button
      key={ level }
      className={ classString }
      onClick={ () => dispatchChangeSelectedLevel(level)}
    >
      { level }
    </button>
  );
}


const LevelSelector = ({ dispatchChangeSelectedLevel, selectedLevel }) => (
  <div className='LevelSelector'>
    { levels.map(level => renderLevelButton(level, selectedLevel, dispatchChangeSelectedLevel)) }
  </div>
);

export default connect(mapStateToProps, mapDispatchToPros)(LevelSelector);