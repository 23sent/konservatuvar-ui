import { apiCall } from '../../Helpers/api';
import actionTypes from '../actionTypes';

import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { getExerciseRequest } from '../actions';
import store from '..';

function* watchCreateQuestionSaga() {
  yield takeLatest(actionTypes.CREATE_QUESTION_REQUEST, createQuestionSaga);
}

function* createQuestionSaga(action) {
  try {
    const { content, exercise_id } = action.payload;
    const { data } = yield apiCall('post', `question/`, { content, exercise_id });
    console.log('Question created: ', data);
    yield put(getExerciseRequest(exercise_id));
  } catch (err) {
    console.error(err);
  }
}

function* watchDeleteQuestionSaga() {
  yield takeLatest(actionTypes.DELETE_QUESTION_REQUEST, deleteQuestionSaga);
}

function* deleteQuestionSaga(action) {
  try {
    const { id } = action.payload;
    const { data } = yield apiCall('delete', `question/${id}`);
    console.log('Question deleted: ', data);

    const { exercise_id } = data;
    if (exercise_id !== undefined) {
      yield put(getExerciseRequest(exercise_id));
    }
  } catch (err) {
    console.error(err);
  }
}

function* watchUpdateQuestionSaga() {
  yield takeLatest(actionTypes.UPDATE_QUESTION_REQUEST, updateQuestionSaga);
}

function* updateQuestionSaga(action) {
  try {
    const { question_id, content } = action.payload;
    const { data } = yield apiCall('put', `question/${question_id}`, { content });
    console.log('Question updated: ', data);

    const exercise = store.getState().exerciseReducer.exercise;
    if (exercise.id !== undefined) {
      yield put(getExerciseRequest(exercise.id));
    }
  } catch (err) {
    console.error(err);
  }
}

export default function* questionSagas() {
  yield all([fork(watchCreateQuestionSaga)]);
  yield all([fork(watchDeleteQuestionSaga)]);
  yield all([fork(watchUpdateQuestionSaga)]);
}
