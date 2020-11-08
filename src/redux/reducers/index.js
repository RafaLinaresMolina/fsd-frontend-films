import { combineReducers } from "redux";
import film from './film';
import user from './user';
import notification from './notification';
const reducer = combineReducers({
    filmReducer: film,
    userReducer: user,
    notificationReducer: notification
})
export default reducer;