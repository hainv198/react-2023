import counterReducer from "./counter";
import isLoggerReducer from "./isLogger";
import {combineReducers} from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogger : isLoggerReducer
})

export default allReducer;