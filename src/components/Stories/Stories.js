import React from 'react';
import Card from '@material-ui/core/Card';
import Panels from './Panels/Panels';


const cardStyle = { display: 'flex', margin: '10px', alignItems: 'center', backgroundColor: '#f8f8f8', flexDirection: 'column' };

console.log('env', process?.env?.NODE_ENV);
// const STORIES_ALL_API = process.env.NODE_ENV
//   ? 'http://localhost:8080/stories/all'
//   : 'https://kswd-hfls.herokuapp.com/stories/all';

const STORIES_ALL_API = 'https://kswd-hfls.herokuapp.com/stories/all';

class Stories extends React.Component {
  state = { stories: null };

  checkKey = key =>
    fetch(STORIES_ALL_API, { headers: { 'x-api-key': key } })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          this.props.setLogin({ isLoggedIn: true, key });
          this.setState({ stories: data });
        }
      });

  getKey = () => {
    const key = prompt('Please enter your key'); // NOSONAR
    this.checkKey(key);
  }

  render() {
    const { stories } = this.state;
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

    if (!stories) {
      return <h3>loading ...</h3>;
    }

    return (
      <div id='Stories'>
        <Card style={ cardStyle }>
          <h1>My Stories</h1>
          <h2>Beginner</h2>
          <Panels stories={ stories.beginner } />
        </Card>
      </div>
    );
  }
}

export default Stories;
