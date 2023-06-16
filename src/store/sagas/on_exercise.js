import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { nextQuestion, updateQuestionAccuracyData } from '../actions';
import actionTypes from '../actionTypes';
import { apiCall } from '../../Helpers/api';

function* watchUpdateQuestionAccuracySaga() {
  yield takeLatest(actionTypes.UPDATE_QUESTION_ACCURACY_REQUEST, updateQuestionAccuracySaga);
}

function* updateQuestionAccuracySaga(action) {
  try {
    const { question_id, accuracy } = action.payload;
    const { data } = yield apiCall('post', `accuracy/my/${question_id}`, { accuracy });
    yield delay(1000);
    yield put(updateQuestionAccuracyData(question_id, accuracy));
    yield put(nextQuestion());
  } catch (err) {
    if (err?.response?.status) {
      const { question_id, accuracy } = action.payload;
      yield delay(1000);
      yield put(updateQuestionAccuracyData(question_id, accuracy));
      yield put(nextQuestion());
    } else {
      console.error(err);
    }
  }
}

export default function* onExerciseSagas() {
  yield all([fork(watchUpdateQuestionAccuracySaga)]);
}
