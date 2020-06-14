import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SAGA_GET_STORIES } from '../actions';
import getStoriesService from '../../../services/stories/getStories.service';
import { StoriesAction } from '../../reducers/stories/reducer';

function* storiesSaga() {
  yield takeLatest(SAGA_GET_STORIES, storiesSagaWorker);
}

function* storiesSagaWorker() {
  yield put(StoriesAction.START());

  const username = yield select(state => {
    console.log('asdf state', state);
    return state.user.username;
  });
  console.log('asdf username', username);

  try {
    const data = yield call(getStoriesService, username);
    yield put(StoriesAction.SUCCEED(data));
  } catch(err) {
    yield put(StoriesAction.FAIL(err));
    console.error('Failure loading toggles', err);
  }
}

export default storiesSaga;
