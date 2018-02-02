import React from 'react'

import './Links.css'




const Links = ({ links }) => {
  console.log('links', links)
  return (
    <div id='Links'>
      <h3 className="linkTitle">
        {links.title}
      </h3>
      { links.data.map((link, idx) => (
          <h4 key={idx}>
            <a href={link.url}>{link.name}</a>
          </h4>
        ))
      }
    </div>
  )
}

export default Links
