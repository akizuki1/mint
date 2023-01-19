import {
  RPC_STATUS,
  AUTH_STATUS,
  USER_TOKEN,
  USE_AGREEMENT,
  BUY_AGREEMENT,
  TAB_MENU
} from "../reducers/apiDataReducer";

export const validateRpc = (status) => async (dispatch) => {
  try {
    dispatch({
      type: RPC_STATUS,
      payload: status
    });
  } catch (error) {
    console.log("error loading tokens");
  }
};

export const validateAuth = (status) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_STATUS,
      payload: status
    });
  } catch (error) {
    console.log("error in auth");
  }
};

export const buyAgreement = (status) => async (dispatch) => {
  try {
    dispatch({
      type: BUY_AGREEMENT,
      payload: status
    });
  } catch (error) {
    console.log("error in auth");
  }
};
export const agreement = (status) => async (dispatch) => {
  try {
    dispatch({
      type: USE_AGREEMENT,
      payload: status
    });
  } catch (error) {
    console.log("error in auth");
  }
};

export const tabMenu = (tab) => async (dispatch) => {
  try {
    dispatch({
      type: TAB_MENU,
      payload: tab
    });
  } catch (error) {
    console.log("error in auth");
  }
};

export const setUserToken = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_TOKEN,
      payload: token
    });
  } catch (error) {
    console.log("error set token ");
  }
};
