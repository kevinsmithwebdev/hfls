import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import './FrontCard.css';

const FrontCard = ({ title, body, backgroundColor, index, color = '#fff', vertOffset = 0, height }) => {
  const baseMargin = 10;
  const margin = `${baseMargin}px`
  const marginTop = `${baseMargin + vertOffset}px`;
  return (
    <Card
      key={ index }
      raised
      style={ {
        margin, marginTop, backgroundColor, color, height: `${height}px`, width: '360px'
      } }
    >
      <CardContent>
        { title }
        { body }
      </CardContent>
    </Card>
  )
};

export default FrontCard