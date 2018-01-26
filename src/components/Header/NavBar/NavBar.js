import React from 'react'
import './NavBar.css'
const navArr = ['home', 'store', 'about', 'blog', 'contact']

const renderLink = (link, idx) => {
  let linkUrl = (link==='home') ? '/' : link
  return (
    <li key={idx}>
      <a href={linkUrl}>{link}</a>
    </li>
  )
}

const NavBar = () => {
  console.log('NavBar.render')
  return (
    <div id='NavBar' className='navbar'>
      <ul>
        {navArr.map((link, idx) => renderLink(link, idx))}
      </ul>
    </div>
  )
}

export default NavBar
