import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import people from './people.data';
import './AboutUs.css';

import './AboutUs.css';

const cardColors = [
  '#ffd1b3',
  '#c0d6ff',
  '#c4ffc4',
  '#ffc6ff',
];

const cardStyle = { display: 'flex', margin: '10px', alignItems: 'center' };
const imageStyle = { width: '150px', height: 'auto', padding: '5px', borderRadius: '7px' };

const getCardFlexDirection = idx => idx % 2 ? 'row-reverse' : 'row';
const getCardBackgroundColor = idx => cardColors[idx % cardColors.length];

const renderTitle = (name, title) => (
  <Fragment>
    <Typography gutterBottom variant="h5" component="h2" style={ { display: 'inline-block' } }>
      { name }&nbsp;–&nbsp;
    </Typography>
    <Typography gutterBottom variant="h5" component="h2" style={ { fontStyle: 'italic', display: 'inline-block' } }>
      { title }
    </Typography>
  </Fragment>
);

const renderPara = (para, i) => (
  <Typography key={ i } paragraph={ i !== para.length - 1 } component="p">
    { para }
  </Typography>
);

// TODO: CardMedia?
const renderPersonCard = ({ image, name, title, text, link }, idx) => (
  <Card key={ name } style={ { ...cardStyle, flexDirection: getCardFlexDirection(idx), backgroundColor: getCardBackgroundColor(idx) } }>
    <img src={ image } style={ imageStyle } alt={ title } />
    <CardContent>
      { renderTitle(name, title) }
      { text.map(renderPara) }
      { !!link &&
        <Link href={ link }>
          See more of her work.
        </Link>
      }
    </CardContent>
  </Card>
);

const AboutUs = () => (
  <div id='AboutUs'>
    { people.map(renderPersonCard) }
  </div>
);

export default AboutUs;