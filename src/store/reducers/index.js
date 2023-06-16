import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './example';
import categoriesReducer from './categories';
import exerciseReducer from './exercise';
import editQuestionReducer from './editQuestion';
import userReducer from './user';

const reducers = combineReducers({
  exampleReducer,
  categoriesReducer,
  exerciseReducer,
  editQuestionReducer,
  userReducer,
});

export default reducers;
