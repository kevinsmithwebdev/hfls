import { call, put, takeLatest } from 'redux-saga/effects';
import { SAGA_TOGGLES } from '../actions';
import getTogglesService from '../../../services/toggles/getToggles.service';
import { TogglesAction } from '../../reducers/toggles/reducer';

function* togglesSaga() {
  yield takeLatest(SAGA_TOGGLES, togglesSagaWorker);
}

function* togglesSagaWorker() {
  yield put(TogglesAction.START());

  try {
    const data = yield call(getTogglesService);
    yield put(TogglesAction.SUCCEED(data));
  } catch(err) {
    yield put(TogglesAction.FAIL(err));
    console.error('Failure loading toggles', err);
  }
}

export default togglesSaga;
