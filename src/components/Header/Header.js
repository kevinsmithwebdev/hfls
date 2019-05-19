import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TitleBar from './TitleBar/TitleBar';
import navArr from './routes';
import './Header.css';

const renderLink = (label, idx) => {
  let linkUrl = (label === 'home') ? '/' : label.replace(/\s/g, '');
  return (
    <Tab
      key={ label }
      label={ label }
      value={ idx }
      component={Link}
      classes={ { root: 'tabRoot', selected: 'tabSelected' } }
      to={ linkUrl }
    />

  );
};

const Header = () => {
  const [ navIndex, changeNavIndex ] = useState(0);
  const handleChangeNavIndex = (event, index) => changeNavIndex(index);
  return (
    <AppBar
      id='Header'
      title='My App '
      onChange={ this.handleChange }
    >
      <TitleBar />
      <Tabs
        TabIndicatorProps={ { style: {backgroundColor: 'yellow' } } }
        onChange={ handleChangeNavIndex }
        value={ navIndex }
        style={ { width: '1200px', margin: '0 auto' } }
      >
        { navArr.map(renderLink) }
      </Tabs>
    </AppBar>
  );
};

export default Header
