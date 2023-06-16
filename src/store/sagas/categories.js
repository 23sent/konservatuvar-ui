import { apiCall } from '../../Helpers/api';
import actionTypes from '../actionTypes';

import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { getCategoriesData, getCategoryDetailData } from '../actions/categories';

function* watchGetCategoriesSaga() {
  yield takeLatest(actionTypes.GET_CATEGORIES_REQUEST, getCategoriesSaga);
}

function* getCategoriesSaga(action) {
  try {
    const { data } = yield apiCall('get', 'category');
    yield put(getCategoriesData(data));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetCategoryDetailSaga() {
  yield takeLatest(actionTypes.GET_CATEGORY_DETAIL_REQUEST, getCategoryDetailSaga);
}

function* getCategoryDetailSaga(action) {
  try {
    const { id } = action.payload;
    const { data } = yield apiCall('get', `category/${id}`);
    yield put(getCategoryDetailData(data));
  } catch (err) {
    console.error(err);
  }
}

export default function* categorySagas() {
  yield all([fork(watchGetCategoriesSaga)]);
  yield all([fork(watchGetCategoryDetailSaga)]);
}
