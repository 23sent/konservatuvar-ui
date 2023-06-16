// import { takeLatest, all, fork } from 'redux-saga/effects';
import { apiCall } from '../../Helpers/api';
import actionTypes from '../actionTypes';

import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { getExerciseData, getExerciseRequest, getMyExercisesData, getMyExercisesRequest } from '../actions';

function* watchGetExerciseSaga() {
  yield takeLatest(actionTypes.GET_EXERCISE_REQUEST, getExerciseSaga);
}

function* getExerciseSaga(action) {
  try {
    const { id } = action.payload;
    const { data } = yield apiCall('get', `exercise/${id}`);
    yield put(getExerciseData(data));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetMyExercisesSaga() {
  yield takeLatest(actionTypes.GET_MY_EXERCISES_REQUEST, getMyExercisesSaga);
}

function* getMyExercisesSaga(action) {
  try {
    const { data } = yield apiCall('get', `user/exercises`);
    yield put(getMyExercisesData(data));
  } catch (err) {
    console.error(err);
  }
}

function* watchCreateExercisesSaga() {
  yield takeLatest(actionTypes.CREATE_EXERCISE_REQUEST, createExercisesSaga);
}

function* createExercisesSaga(action) {
  try {
    const { title, description, category_id } = action.payload;
    const { data } = yield apiCall('post', `exercise`, { title, description, category_id });
    yield put(getMyExercisesRequest());
  } catch (err) {
    console.error(err);
  }
}

function* watchUpdateExercisesSaga() {
  yield takeLatest(actionTypes.UPDATE_EXERCISE_REQUEST, updateExercisesSaga);
}

function* updateExercisesSaga(action) {
  try {
    const { id: exercise_id, title, description, category_id } = action.payload;
    const { data } = yield apiCall('put', `exercise/${exercise_id}`, { title, description, category_id });
    yield put(getExerciseRequest(exercise_id));
  } catch (err) {
    console.error(err);
  }
}

export default function* exerciseSagas() {
  yield all([fork(watchGetExerciseSaga)]);
  yield all([fork(watchGetMyExercisesSaga)]);
  yield all([fork(watchCreateExercisesSaga)]);
  yield all([fork(watchUpdateExercisesSaga)]);
}
