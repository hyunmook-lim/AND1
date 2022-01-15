import { createStore, combineReducers } from "redux";
import { LoginReducer } from "../reducers/LoginReducer";
import { ProgressReducer } from "../reducers/ProgressReducer";

const reducers = combineReducers({
  loginInfo: LoginReducer,
  progress: ProgressReducer,
});

const store = createStore(reducers);

export default store;
