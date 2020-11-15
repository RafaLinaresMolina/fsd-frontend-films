import axios from 'axios';
import { SET_ALL_ORDERS, SET_ALL_USERS } from '../types/adminTypes';
import store from '../store';


export const getAllUsers = async(token) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users/', {
      headers: {
          Authorization: "Bearer " + token
      }
  })
  store.dispatch({ type: SET_ALL_USERS, payload: res.data });
}

export const getAllOrders = async(token, forward = true, offset = 0) => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/orders/?offset=${offset}`, {
      headers: {
          Authorization: "Bearer " + token
      }
  })
  const payload = {
    allOrders: res.data.rows,
    orderCount: forward ? store.getState().adminReducer.orderCount + res.data.rows.length : store.getState().adminReducer.orderCount - res.data.rows.length,
    totalOrders: res.data.count,
  }
  console.log(payload)
  store.dispatch({ type: SET_ALL_ORDERS, payload });

}