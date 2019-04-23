import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// import './FrontCard.css';

const imageStyles = { width: '200px', height: 'auto' };

const renderTitle = title => (
  <Typography gutterBottom variant="h5" component="h2">
    {title}
  </Typography>
);

const renderPara = (text, isLast) => (
  <Typography paragraph={ !isLast } component="p">
    {text}
  </Typography>
);

const FrontCard = ({ title, body, backgroundColor, color = '#fff', vertOffset = 0 }) => {
  const baseMargin = 10;
  const margin = `${baseMargin}px`
  const marginTop = `${baseMargin + vertOffset}px`;
  console.log()
  return (
    <Card
      raised
      style={ {
        display: 'flex', margin, marginTop, backgroundColor, color, width: '25%', height: '360px',
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