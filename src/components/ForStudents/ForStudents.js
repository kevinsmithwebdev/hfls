import React from 'react';
import { connect } from 'react-redux';
import LevelSelector from '../../common/LevelSelector/LevelSelector';
import Stories from './Stories/Stories';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    selectedLevel: state.level.selected,
  };
};

const getComponent = (selectedLevel) => {
  switch (selectedLevel) {
    case 'beginner':
      return <Stories />;
    default:
      return <h3>There is no content for this level yet.</h3>
  }

};

const ForStudents = ({ selectedLevel, isLoggedIn }) => {
  return (
    <div>
      <LevelSelector />
      { getComponent(selectedLevel) }
    </div>
  );
};

export default connect(mapStateToProps)(ForStudents);
