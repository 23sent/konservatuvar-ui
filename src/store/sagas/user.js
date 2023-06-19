import { apiCall } from '../../Helpers/api';
import actionTypes from '../actionTypes';

import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { getUserData, nextQuestion, signInData, signUpData } from '../actions';

function* watchSignUpSaga() {
  yield takeLatest(actionTypes.SIGN_UP_REQUEST, signUpSaga);
}

function* signUpSaga(action) {
  try {
    const { email, password, name } = action.payload;
    const { data } = yield apiCall('post', 'auth/signup', { email, password, name });
    const { user, token } = data;
    yield put(signUpData(user, token));
  } catch (err) {
    console.error(err);
  }
}

function* watchSignInSaga() {
  yield takeLatest(actionTypes.SIGN_IN_REQUEST, signInSaga);
}

function* signInSaga(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield apiCall('post', 'auth/signin', { email, password });
    const { user, token } = data;
    yield put(signInData(user, token));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetUsetSaga() {
  yield takeLatest(actionTypes.GET_USER_REQUEST, getUserSaga);
}

function* getUserSaga(action) {
  try {
    const { data } = yield apiCall('get', 'user');
    yield put(getUserData(data));
  } catch (err) {
    console.error(err);
  }
}

export default function* userSagas() {
  yield all([fork(watchSignUpSaga)]);
  yield all([fork(watchSignInSaga)]);
  yield all([fork(watchGetUsetSaga)]);
}
