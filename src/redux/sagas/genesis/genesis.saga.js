import { takeLatest, put } from 'redux-saga/effects';
import { SAGA_GENESIS, togglesSagaAC } from '../actions';

function* genesisSaga() {
  yield takeLatest(SAGA_GENESIS, genesisSagaWorker);
}

function* genesisSagaWorker() {
  yield put(togglesSagaAC());
}

export default genesisSaga;
