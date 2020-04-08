import React from 'react';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import './Contact.css';
// import imgRoxana from '../../assets/images/aboutUs/rox.jpg';
// import { emailRoxana } from '../../constants/constants';

const cardStyle = { display: 'flex', margin: '10px', alignItems: 'center', backgroundColor: '#f8f8f8', flexDirection: 'column' };
// const imageStyle = { width: '150px', height: 'auto', padding: '5px', borderRadius: '7px' };

const STORIES_ALL_API = 'http://localhost:8080/stories/all';


class Stories extends React.Component {
  checkKey = key => {
    console.log('here1', key);
    fetch(STORIES_ALL_API, { headers: { 'x-api-key': key } })
      .then(res => res.json())
      .then(data => {
        console.log('here2', data);
        if (!data.error) {
          this.props.setLogin({ isLoggedIn: true, key });
        }
      });
  }

  getKey = () => {
    const key = prompt('Please enter your key'); // NOSONAR
    this.checkKey(key);
  }

  render() {
    if (!this.props.login.isLoggedIn) {
      return (
        <div id='Stories'>
          <Card style={ cardStyle }>
            <h2>You need to use a key to view this site.</h2>
            <button onClick={ this.getKey }>Enter Key</button>
            <br />
          </Card>
        </div>
      )
    }
    return (
      <div id='Stories'>
        <Card style={ cardStyle }>
          <h1>My Stories</h1>
        </Card>
      </div>
    );
  }
}

export default Stories;
