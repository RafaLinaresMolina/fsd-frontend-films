import axios from "axios";
import store from "../store";
import { SET_ALL_ORDERS } from "../types/adminTypes";
import {
  SUCCESS_NOTIFICATION,
} from "../types/notificationTypes";

export const updateOrderStatus = async (order, token) => {
  await axios.put(
    `${process.env.REACT_APP_BASE_URL}/orders/update/${order.id}/status/${order.status}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  await getAllOrders(token);
  store.dispatch({
    type: SUCCESS_NOTIFICATION,
    payload: {
      notification: {
        title: "SUCCESS!",
        msg: "Order Updated!",
      },
      show: true,
    },
  });
};

export const createOrder = async (order, token) => {
  await axios.post(
    `${process.env.REACT_APP_BASE_URL}/orders/`,
    order,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  store.dispatch({
    type: SUCCESS_NOTIFICATION,
    payload: {
      notification: {
        title: "SUCCESS!",
        msg: "Order Created! For more info check profile.",
      },
      show: true,
    },
  });
};

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