import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './Contact.css';
import imgRoxana from '../../assets/images/aboutUs/rox.jpg';
import { emailRoxana } from '../../constants/constants';

const cardStyle = { display: 'flex', margin: '10px', alignItems: 'center', backgroundColor: '#ffd1b3' };
const imageStyle = { width: '150px', height: 'auto', padding: '5px', borderRadius: '7px' };

const Contact = () => {
  return (
    <div id='Contact'>
      <Card style={ cardStyle }>
        <img src={ imgRoxana } style={ imageStyle } alt='Roxana on contact page' />
        <CardContent>
          <Typography variant='h5' style={ { textTransform: 'none', margin: '10px 0' }  }>
            Roxana can be best contacted by email.
          </Typography>
          <Typography variant='h5' style={ { textTransform: 'none', margin: '10px 0' } }>
            <Link href={ `mailTo:${emailRoxana}` }>
              { emailRoxana }
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
