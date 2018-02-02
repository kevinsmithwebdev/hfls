import React from 'react'

import LinksSection from './LinksSection/LinksSection'

import './Extra.css'

const Extra = () => {
  return (
    <div id='Extra'>
      <h1> These are some helpful links for learning Spanish...</h1>
      <LinksSection linksFile="links" />
    </div>
  )
}

export default Extra
