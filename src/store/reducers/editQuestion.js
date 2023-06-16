import actionTypes from '../actionTypes';

const initialState = {
  question: {},
};

const editQuestionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_EDIT_QUESTION:
      return {
        ...state,
        question: { ...payload.question },
      };
    case actionTypes.UPDATE_EDIT_QUESTION:
      return {
        ...state,
        question: { ...payload.question },
      };
    default:
      return state;
  }
};

export default editQuestionReducer;
