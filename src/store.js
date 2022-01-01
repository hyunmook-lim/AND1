import { createStore, combineReducers } from "redux";
import { LoginReducer } from "./reducers/LoginReducer";

const reducers = combineReducers({ loginInfo: LoginReducer });

const store = createStore(reducers);

export default store;
