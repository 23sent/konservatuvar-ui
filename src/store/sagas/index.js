import { all, fork } from 'redux-saga/effects';
import exampleSagas from './example';
import categorySagas from './categories';
import exerciseSagas from './exercise';
import questionSagas from './question';
import userSagas from './user';
import onExerciseSagas from './on_exercise';

export default function* sagas() {
  yield all([fork(exampleSagas)]);
  yield all([fork(categorySagas)]);
  yield all([fork(exerciseSagas)]);
  yield all([fork(questionSagas)]);
  yield all([fork(userSagas)]);
  yield all([fork(onExerciseSagas)]);
}
