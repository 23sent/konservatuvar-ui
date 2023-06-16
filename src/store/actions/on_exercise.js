import actionTypes from '../actionTypes';

// Accuracy
export const updateQuestionAccuracyRequest = (question_id, accuracy) => ({
  type: actionTypes.UPDATE_QUESTION_ACCURACY_REQUEST,
  payload: { question_id, accuracy },
});

export const updateQuestionAccuracyData = (question_id, accuracy) => ({
  type: actionTypes.UPDATE_QUESTION_ACCURACY_DATA,
  payload: { question_id, accuracy },
});
