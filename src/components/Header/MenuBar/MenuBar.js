import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { selectLessonsToggle } from '../../../redux/reducers/toggles/selectors';

import rawRoutes from './routes';

import './MenuBar.css';

const mapStateToProps = state => {
  const lessonsToggle = selectLessonsToggle(state);
  const routes = lessonsToggle
    ? rawRoutes
    : rawRoutes.filter(r => r.toLowerCase() !== 'lessons')
  return {
    routes,
  }
};

const renderLink = (label, idx) => {
  const linkUrl = (label === 'home') ? '/' : label.replace(/\s/g, '-');
  return (
    <Tab
      key={ label }
      label={ label }
      value={ idx }
      component={ Link }
      style={{ minWidth: 120 }}
      classes={ { root: 'tabRoot', selected: 'tabSelected' } }
      to={ linkUrl }
    />
  );
};

const MenuBar = props => {
  const [navIndex, changeNavIndex] = useState(0);
  const handleChangeNavIndex = (event, index) => changeNavIndex(index);
  return (
    <div id='MenuBar'>
      <Tabs
        tabItemContainerStyle={{width: '60px'}}
        onChange={ handleChangeNavIndex }
        style={ { width: '1200px', margin: '0 auto' } }
        TabIndicatorProps={ { style: { backgroundColor: 'yellow' } } }
        value={ navIndex }
      >
        { props.routes.map(renderLink) }
      </Tabs>
    </div>
  );
};

export default connect(mapStateToProps)(MenuBar);