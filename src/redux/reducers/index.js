import { combineReducers } from "redux";
import film from './film';
import user from './user';
import admin from './admin';
import notification from './notification';
const reducer = combineReducers({
    filmReducer: film,
    userReducer: user,
    notificationReducer: notification,
    adminReducer: admin
})
export default reducer;