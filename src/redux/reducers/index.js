import { combineReducers } from "redux";
import film from './film';
import user from './user';
import admin from './admin';
import notification from './notification';
import profile from './profile';

const reducer = combineReducers({
    filmReducer: film,
    userReducer: user,
    notificationReducer: notification,
    adminReducer: admin,
    profileReducer: profile
})
export default reducer;