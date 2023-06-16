// import { takeLatest, all, fork } from 'redux-saga/effects';
import actionTypes from '../actionTypes';

import { all, fork, takeLatest } from 'redux-saga/effects';

function* watchExampleSaga() {
  yield takeLatest(actionTypes.EXAMPLE_ACTION_TYPE, exampleFuncSaga);
}

function* exampleFuncSaga(action) {
  try {
    yield console.log('Example Saga');
  } catch (err) {
    console.error(err);
  }
}

export default function* exampleSagas() {
  yield all([fork(watchExampleSaga)]);
}
