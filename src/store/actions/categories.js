import actionTypes from '../actionTypes';

// Categories
export const getCategoriesRequest = () => ({
  type: actionTypes.GET_CATEGORIES_REQUEST,
});

export const getCategoriesData = (categories) => ({
  type: actionTypes.GET_CATEGORIES_DATA,
  payload: { categories },
});

export const getCategoriesError = (error) => ({
  type: actionTypes.GET_CATEGORIES_ERROR,
});

export const getCategoryDetailRequest = (categoryId) => ({
  type: actionTypes.GET_CATEGORY_DETAIL_REQUEST,
  payload: { id: categoryId },
});

export const getCategoryDetailData = (category) => ({
  type: actionTypes.GET_CATEGORY_DETAIL_DATA,
  payload: { category },
});

export const getCategoryDetailError = (error) => ({
  type: actionTypes.GET_CATEGORY_DETAIL_ERROR,
});
