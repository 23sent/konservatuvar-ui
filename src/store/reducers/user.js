import { LocalStorageKeys, USER_INFO } from '../../Constants/localStorageKeys';
import actionTypes from '../actionTypes';

const initialState = {
  user: {},
  token: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SIGN_UP_DATA:
      localStorage.setItem(LocalStorageKeys.USER_INFO, JSON.stringify(payload.user));
      localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(payload.token));
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    case actionTypes.SIGN_IN_DATA:
      localStorage.setItem(LocalStorageKeys.USER_INFO, JSON.stringify(payload.user));
      localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(payload.token));
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    case actionTypes.SIGN_OUT:
      localStorage.removeItem(LocalStorageKeys.USER_INFO);
      localStorage.removeItem(LocalStorageKeys.TOKEN);
      return {
        ...state,
        user: {},
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
