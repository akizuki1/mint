import { combineReducers } from "redux";
import { apiDataReducer } from "./apiDataReducer";
import { web3DataReducer } from "./web3DataReducer";

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  web3Data: web3DataReducer,
});

export default rootReducer;
