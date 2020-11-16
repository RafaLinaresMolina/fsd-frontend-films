import axios from "axios";
import store from "../store";
import {
  SUCCESS_NOTIFICATION,
} from "../types/notificationTypes";
import { getAllOrders } from "./admin";

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