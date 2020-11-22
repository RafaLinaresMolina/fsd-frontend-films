import axios from 'axios';
import { SET_ALL_USERS } from '../types/adminTypes';
import store from '../store';


export const getAllUsers = async(token) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users/', {
      headers: {
          Authorization: "Bearer " + token
      }
  })
  store.dispatch({ type: SET_ALL_USERS, payload: res.data });
}
