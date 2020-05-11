import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './Contact.css';
import { emailRoxana } from '../../constants/constants';

const imgRoxana = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/images/aboutUs/rox.jpg';

const imageStyle = { width: '150px', height: 'auto', padding: '5px', borderRadius: '7px' };

const Contact = () => (
  <div id='Contact' className='outer-wrapper outer-wrapper0'>
    <div className='inner-wrapper wrapper'>
      <img src={ imgRoxana } style={ imageStyle } alt='Roxana on contact page' />
      <div>
        <Typography variant='h5' style={ { textTransform: 'none', margin: '10px 0' }  }>
          Roxana can be best contacted by email.
        </Typography>
        <Typography variant='h5' style={ { textTransform: 'none', margin: '10px 0' } }>
          <Link href={ `mailTo:${emailRoxana}` }>
            { emailRoxana }
          </Link>
        </Typography>
      </div>
    </div>
  </div>
);

export default Contact
