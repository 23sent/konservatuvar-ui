import actionTypes from '../actionTypes';

// Question

// Create
export const createQuestionRequest = (exerciseId, content) => ({
  type: actionTypes.CREATE_QUESTION_REQUEST,
  payload: { exercise_id: exerciseId, content },
});

export const createQuestionData = () => ({
  type: actionTypes.CREATE_QUESTION_DATA,
});

export const createQuestionError = (error) => ({
  type: actionTypes.CREATE_QUESTION_ERROR,
});

// Delete
export const deleteQuestionRequest = (question_id) => ({
  type: actionTypes.DELETE_QUESTION_REQUEST,
  payload: { id: question_id },
});

export const deleteQuestionData = () => ({
  type: actionTypes.DELETE_QUESTION_DATA,
});

export const deleteQuestionError = (error) => ({
  type: actionTypes.DELETE_QUESTION_ERROR,
});

// Update
export const updateQuestionRequest = (question_id, content) => ({
  type: actionTypes.UPDATE_QUESTION_REQUEST,
  payload: { question_id, content },
});

export const updateQuestionData = () => ({
  type: actionTypes.UPDATE_QUESTION_DATA,
});

export const updateQuestionError = (error) => ({
  type: actionTypes.UPDATE_QUESTION_ERROR,
});
