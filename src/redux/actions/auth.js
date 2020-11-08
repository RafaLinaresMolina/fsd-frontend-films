import axios from 'axios';
import { LOGIN, LOGOUT, READ_USER } from '../types/userTypes';
import store from '../store';
import { CLEAR_ALL_PROFILE_INFO } from '../types/profileTypes';
import { CLEAR_ALL_FILMS } from '../types/filmTypes';
import { CLEAR_ALL_ADMIN_INFO } from '../types/adminTypes';

export const login = async(credentials) => {
    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/login', credentials)
    localStorage.setItem('authToken', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    store.dispatch({ type: LOGIN, payload: res.data.user });
}

export const getLoggedUser = async(token) => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/auth/logged', {
        headers: {
            Authorization: token
        }
    })
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

export const register = async(token, body) => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/auth/signup', body, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
  }