import axios from 'axios';
import { LOGIN, LOGOUT, READ_USER } from '../types/userTypes';
import store from '../store';
import { CLEAR_ALL_PROFILE_INFO } from '../types/profileTypes';
import { CLEAR_ALL_FILMS } from '../types/filmTypes';
import { CLEAR_ALL_ADMIN_INFO } from '../types/adminTypes';
import {ERROR_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION} from '../types/notificationTypes';


export const loginAction = async(credentials) => {
    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/login', credentials)
    localStorage.setItem('authToken', res.data.token);
    store.dispatch({ type: LOGIN, payload: res.data.token });
    await getLoggedUser(res.data.token);
    store.dispatch({
        type: SUCCESS_NOTIFICATION,
        payload: {
          notification: {
            title: "Correct Login.",
            msg: 'Welcome back!',
          },
          show: true,
        },
      });
}

export const getLoggedUser = async(token) => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/auth/logged', {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
    localStorage.setItem("user", JSON.stringify(res.data));
    store.dispatch({ type: READ_USER, payload: res.data });
}

export const logOut = async(token) => {
  await axios.get(process.env.REACT_APP_BASE_URL + '/auth/logout', {
      headers: {
          Authorization: token
      }
  });
  store.dispatch({ type: CLEAR_ALL_ADMIN_INFO, payload: {} });
  store.dispatch({ type: CLEAR_ALL_FILMS, payload: {} });
  store.dispatch({ type: CLEAR_ALL_PROFILE_INFO, payload: {} });
  store.dispatch({ type: LOGOUT, payload: {} });
  localStorage.clear();
}

export const registerAction = async(body) => {
    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/signup', body);
    return res.data;
  }