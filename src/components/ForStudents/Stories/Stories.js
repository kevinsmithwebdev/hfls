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

const login = (key, dispatchLogInSaga) => dispatchLogInSaga(key);

const getKey = dispatchLogInSaga => {
  const key = prompt('Please enter your key'); // NOSONAR
  login(key, dispatchLogInSaga);
};


export const Stories = props => {
  const { stories, isWaiting, isLoggedIn, dispatchLogInSaga, dispatchGetStories } = props;

  useEffect(() => {
    if (isLoggedIn) {
      dispatchGetStories();
    }
  }, [isLoggedIn]);

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
