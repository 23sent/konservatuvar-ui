import actionTypes from '../actionTypes';

const initialState = {
  categories: [],
  category: {},
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_CATEGORIES_DATA:
      return {
        ...state,
        categories: [...payload.categories],
      };
    case actionTypes.GET_CATEGORY_DETAIL_DATA:
      return {
        ...state,
        category: { ...payload.category },
      };
    default:
      return state;
  }
};

export default categoriesReducer;
