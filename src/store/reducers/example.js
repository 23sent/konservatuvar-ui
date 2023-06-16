import actionTypes from '../actionTypes';

const initialState = {
  example: 0,
};

const exampleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.EXAMPLE_ACTION_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default exampleReducer;
