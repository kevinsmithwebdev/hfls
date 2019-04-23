import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TitleBar from './TitleBar/TitleBar';
import './Header.css'

const navArr = ['home', 'store', 'extra', 'about us', 'blog', 'contact'];

const renderLink = (label, idx) => {
  let linkUrl = (label === 'home') ? '/' : label.replace(/\s/g, '');
  return (
    <Tab
      key={ idx }
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
    <AppBar id='Header' title='My App' onChange={this.handleChange} >
      <TitleBar />
      <Tabs
        inkBarStyle={{background: 'pink'}}
        value={ navIndex }
        onChange={ handleChangeNavIndex }
        classes={{ root: 'tabsRoot', indicator: {
          background: 'white',
        } }}
      >
        { navArr.map(renderLink) }
      </Tabs>
    </AppBar>
  );
};

export default Header
