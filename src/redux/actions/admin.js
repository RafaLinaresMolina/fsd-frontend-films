import axios from 'axios';
import { SET_ALL_ORDERS, SET_ALL_USERS } from '../types/adminTypes';
import store from '../store';
import { ERROR_NOTIFICATION, INFO_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION } from '../types/notificationTypes';


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

  // TESTING PRUPOSE NOTIFICATION
  store.dispatch({ type: ERROR_NOTIFICATION, payload: {notification: {title: "CRITICAL!", msg: "Execute order 66!"}, show: true}});
  store.dispatch({ type: SUCCESS_NOTIFICATION, payload: {notification: {title: "SUCCESS!", msg: "It works!"}, show: true}});
  store.dispatch({ type: WARNING_NOTIFICATION, payload: {notification: {title: "WARNING!", msg: "Palpatine was an impostor"},show: true} });
  store.dispatch({ type: INFO_NOTIFICATION, payload: {notification: {title: "WANTED:", msg: ["Obi Wan Kenobi", "Yoda", "Darth Maul"]}, show:true} });
}