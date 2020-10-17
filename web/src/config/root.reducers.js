import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notifications } from "react-notification-system-redux";

//import reducers
import userReducer from "../pages/Landing/Landing.Reducers";

const createReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    users: userReducer,
  });

export default createReducer;
