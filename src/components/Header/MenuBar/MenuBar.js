import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import routes from './routes';

import './MenuBar.css';

const renderLink = (label, idx) => {
  const linkUrl = (label === 'home') ? '/' : label.replace(/\s/g, '');
  return (
    <Tab
      key={ label }
      label={ label }
      value={ idx }
      component={ Link }
      classes={ { root: 'tabRoot', selected: 'tabSelected' } }
      to={ linkUrl }
    />
  );
};

const MenuBar = () => {
  const [navIndex, changeNavIndex] = useState(0);
  const handleChangeNavIndex = (event, index) => changeNavIndex(index);
  return (
    <div id='MenuBar'>
      <Tabs
        onChange={ handleChangeNavIndex }
        style={ { width: '1200px', margin: '0 auto' } }
        TabIndicatorProps={ { style: { backgroundColor: 'yellow' } } }
        value={ navIndex }
      >
        { routes.map(renderLink) }
      </Tabs>
    </div>
  );
};

export default MenuBar;