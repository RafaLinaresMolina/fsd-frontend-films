import axios from 'axios';
import { SET_PROFILE_ORDERS, SET_PROFILE, UPDATE_PROFILE } from '../types/profileTypes';
import store from '../store';


export const getOrders = async(token) => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/profile/orders', {
        headers: {
            Authorization: "bearer " + token
        }
    })
    store.dispatch({ type: SET_PROFILE_ORDERS, payload: res.data.rows });
}

export const getProfile = async(token) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + '/profile/user', {
      headers: {
          Authorization: token
      }
  })
  store.dispatch({ type: SET_PROFILE, payload: res.data });
}

export const updateProfile = async(token, body) => {
  const res = await axios.put(process.env.REACT_APP_BASE_URL + '/profile/', body, {
      headers: {
          Authorization: token
      }
  })
  store.dispatch({ type: UPDATE_PROFILE, payload: res.data });
}
