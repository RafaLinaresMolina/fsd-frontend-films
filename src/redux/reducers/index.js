import { combineReducers } from "redux";
import film from './film';
import user from './user';
import admin from './admin';
import notification from './notification';
import profile from './profile';
import cart from './cart'

const reducer = combineReducers({
    filmReducer: film,
    userReducer: user,
    notificationReducer: notification,
    adminReducer: admin,
    profileReducer: profile,
    cartReducer: cart,
})
export default reducer;