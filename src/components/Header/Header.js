import React from 'react'
import AppBar from '@material-ui/core/AppBar';

import TitleBar from './TitleBar/TitleBar';
import MenuBar from './MenuBar/MenuBar';
import './Header.css';

const Header = () => {
  return (
    <AppBar
      id='Header'
      title='My App'
      onChange={ this.handleChange }
    >
      <TitleBar />
      <MenuBar />
    </AppBar>
  );
};

export default Header
