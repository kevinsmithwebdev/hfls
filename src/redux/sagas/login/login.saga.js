import { takeLatest, call, put } from 'redux-saga/effects';
import { SAGA_LOGIN } from '../actions';
import loginCheckService from '../../../services/login/loginCheck.service';
import { logInAC, logOutAC } from '../../reducers/user/user.reducer';

function* loginSaga() {
  yield takeLatest(SAGA_LOGIN, loginSagaWorker);
}

function* loginSagaWorker({ payload }) {
  const response = yield call(loginCheckService, payload.username);
  if (response.isValidLogin) {
    yield put(logInAC(payload.username));
  } else {
    yield put(logOutAC());
  }
}

export default loginSaga;
