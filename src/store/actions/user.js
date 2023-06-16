import actionTypes from '../actionTypes';

// User
export const signUpRequest = (email, name, password) => ({
  type: actionTypes.SIGN_UP_REQUEST,
  payload: { email, name, password },
});

export const signUpData = (user, token) => ({
  type: actionTypes.SIGN_UP_DATA,
  payload: { user, token },
});

export const signUpError = (error) => ({
  type: actionTypes.SIGN_UP_ERROR,
});

export const signInRequest = (email, password) => ({
  type: actionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});

export const signInData = (user, token) => ({
  type: actionTypes.SIGN_IN_DATA,
  payload: { user, token },
});

export const signInError = (error) => ({
  type: actionTypes.SIGN_IN_ERROR,
});

export const signOut = () => ({
  type: actionTypes.SIGN_OUT,
});
