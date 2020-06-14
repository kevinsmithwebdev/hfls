import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import Panels from './Panels/Panels';

import { loginSagaAC } from '../../../redux/sagas/actions';
import { getStoriesSagaAC } from '../../../redux/sagas/actions';

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  isWaiting: state.stories.isWaiting,
  stories: state.stories.result,
});

const mapDispatchToProps = {
  dispatchGetStories: getStoriesSagaAC,
  dispatchLogInSaga: loginSagaAC,
}

const cardStyle = { display: 'flex', margin: '10px', alignItems: 'center', backgroundColor: '#f8f8f8', flexDirection: 'column' };

const STORIES_ALL_API = 'https://kswd-hfls.herokuapp.com/stories/all';

const login = (key, dispatchLogInSaga) => {
  console.log('asdf2', key);
  dispatchLogInSaga(key);
};

const getKey = dispatchLogInSaga => {
  const key = prompt('Please enter your key'); // NOSONAR
  login(key, dispatchLogInSaga);
};


export const Stories = props => {
  // // state = { stories: null };
  // // checkKey = (key, password) =>
  // //   fetch(STORIES_ALL_API, { headers: { 'x-api-key': key } })
  // //     .then(res => res.json())
  // //     .then(data => {
  // //       if (!data.error) {
  // //         this.props.setLogin({ isLoggedIn: true, key });
  // //         this.props.setStories(data);
  // //         this.props.dispatchLogIn({ username: key, password });
  // //       }
  // //     });
  // login = (key) => {
  //   console.log('asdf2', key);
  //   this.props.dispatchLogInSaga(key);
  // };

  // getKey = () => {
  //   const key = prompt('Please enter your key'); // NOSONAR
  //   this.login(key);
  // };

  const { stories, isWaiting, isLoggedIn, dispatchLogInSaga, dispatchGetStories } = props;

  useEffect(() => {
    console.log('asdf useEffect', isLoggedIn);
    if (isLoggedIn) {
      dispatchGetStories();
    }
  }, [isLoggedIn]);

  console.log('asdf1', stories);
  console.log('asdf2', isLoggedIn);
  if (!isLoggedIn) {
    return (
      <div id='Stories'>
        <Card style={ cardStyle }>
          <h2>You need to use a key to view this site.</h2>
          <button onClick={ () => getKey( dispatchLogInSaga) }>Enter Key</button>
          <br />
        </Card>
      </div>
    )
  }

  if (isWaiting) {
    return <h3>loading ...</h3>;
  }
  console.log('asdf stories', stories);
  if (!stories) {
    return null;
  }

  return (
    <div id='Stories'>
      <Card style={ cardStyle }>
        <h1>My Stories</h1>
        <h2>Beginner Level</h2>
        <Panels stories={ stories.beginner } />
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
