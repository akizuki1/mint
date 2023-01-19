import { combineReducers } from "redux";
import { apiDataReducer } from "./apiDataReducer";
import { packDataReducer } from "./packDataReducer";
import { web3DataReducer } from "./web3DataReducer";

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  web3Data: web3DataReducer,
  packData: packDataReducer
});

export default rootReducer;
