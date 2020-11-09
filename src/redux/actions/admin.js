import axios from 'axios';
import { SET_ALL_ORDERS, SET_ALL_USERS } from '../types/adminTypes';
import store from '../store';


export const getAllUsers = async(token) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users/', {
      headers: {
          Authorization: token
      }
  })
  store.dispatch({ type: SET_ALL_USERS, payload: res.data });
}

export const getAllOrders = async(token) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + '/orders/', {
      headers: {
          Authorization: "Bearer " + token
      }
  })
  const payload = {
    allOrders: res.data.rows,
    orderCount: res.data.rows.length,
    totalOrders: res.data.count,
  }
  store.dispatch({ type: SET_ALL_ORDERS, payload });
}