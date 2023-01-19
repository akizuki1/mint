import { HYDRATE } from "next-redux-wrapper";

const dataInicial = {
  rpcStatus: "tokens for RPC not loaded",
  buyAgreement: false,
  authStatus: false,
  userToken: "token not found",
  useAgreement: false,
  tab: 1
};

export const RPC_STATUS = "RPC_STATUS";
export const AUTH_STATUS = "AUTH_STATUS";
export const USER_TOKEN = "USER_TOKEN";
export const BUY_AGREEMENT = "BUY_AGREEMENT";
export const USE_AGREEMENT = "USE_AGREEMENT";
export const TAB_MENU = "TAB_MENU";

export const apiDataReducer = (state = dataInicial, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    case RPC_STATUS:
      return {
        ...state,
        rpcStatus: action.payload
      };
    case BUY_AGREEMENT:
      return {
        ...state,
        buyAgreement: action.payload
      };
    case USE_AGREEMENT:
      return {
        ...state,
        useAgreement: action.payload
      };
    case TAB_MENU:
      return {
        ...state,
        tab: action.payload
      };
    case AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case USER_TOKEN:
      return {
        ...state,
        userToken: action.payload
      };

    default:
      return state;
  }
};
