import actionTypes from '../actionTypes';

// Edit Question
export const startEditingQuestion = (question) => ({
  type: actionTypes.SET_EDIT_QUESTION,
  payload: { question: JSON.parse(JSON.stringify(question)) },
});

export const updateEditingQuestion = (question) => ({
  type: actionTypes.UPDATE_EDIT_QUESTION,
  payload: { question },
});

export const endEditingQuestion = () => ({
  type: actionTypes.SET_EDIT_QUESTION,
  payload: { question: {} },
});
