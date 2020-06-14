import { all } from 'redux-saga/effects';

import genesisSaga from './genesis/genesis.saga';
import loginSaga from './login/login.saga';
import getStoriesSaga from './stories/getStories.saga';
import togglesSaga from './toggles/toggles.saga';

export default function* rootSaga() {
  yield all([
    genesisSaga(),
    loginSaga(),
    getStoriesSaga(),
    togglesSaga(),
  ]);
}
