import axios from 'axios';
import { LocalStorageKeys } from '../Constants/localStorageKeys';
import { signOut } from '../store/actions';
import store from '../store';

const API_URL = process.env.REACT_APP_API_PATH;

function getToken() {
  return JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN));
}
axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${getToken()}`;

    return config;
  },
  (err) => Promise.reject(err),
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    let message = '';
    if (err.response) {
      const { statusCode, error } = err.response.data;
      if (statusCode === 401) {
        console.log('singout');
        store.dispatch(signOut());
      }
      message = error;
    } else {
      message = 'Network Error';
    }

    // store.dispatch(
    //   showAlert({
    //     type: 'error',
    //     message,
    //   }),
    // );

    return Promise.reject(err);
  },
);

export const apiCall = async (method, path, data, params, responseType) => {
  const res = await axios({
    method,
    url: API_URL + path,
    data,
    params,
    responseType,
  });
  return res;
};

export async function uploadPost(path, data) {
  return await axios.post(API_URL + path, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
