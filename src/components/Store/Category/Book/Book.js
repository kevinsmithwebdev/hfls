import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'
import './Book.css';

const buttonTheme = createMuiTheme({ palette: { primary: green, secondary: { main: '#ffffff' } } });

const formatMoney = amount => `$${amount}`;

const Book = ({ name: bookName, price, isFirst, link }, categoryName) => {
  return (
    <div key={ `${categoryName} - ${bookName}` }>
      <MuiThemeProvider theme={ buttonTheme }>
        { !isFirst && <hr width='85%' /> }
        <div id='Book' style={ { width: '100%', flex: 1, display: 'flex', margin: '10px 0' } }>
          {/* <Button variant="contained" color='secondary' style={ { margin: '0 10px' } }>
            View
          </Button> */}
          <Typography variant='h4' component="h4" style={ { display: 'inline-block', flex: 10, margin: '0 10px', textAlign: 'left' } }>
            { bookName }
          </Typography>
          <Typography variant='h4' component="h4" align='right' style={ { display: 'inline-block', flex: 3, justifyContent: 'right', margin: '0 10px' } }>
            { formatMoney(price.toFixed(2)) }
          </Typography>
          <Button target="_blank" variant="contained" color='primary' style={ { margin: '0 10px' } } href={ link } >
            Purchase
          </Button>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default Book;
