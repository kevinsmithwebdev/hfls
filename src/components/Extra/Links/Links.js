import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './Links.css'

const Links = links => (
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
);

export default Links;
