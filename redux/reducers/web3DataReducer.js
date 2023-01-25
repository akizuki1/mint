import { HYDRATE } from "next-redux-wrapper";

const dataInicial = {
  mintProcess: false,
  mintStatus: 0,
  applicationStatus: "none",
  userData: {}
};

export const GET_DATA_USER = "GET_DATA_USER";
export const APPLICATION_STATUS = "APPLICATION_STATUS";
export const MINT_PROCESS = "MINT_PROCESS";

export const web3DataReducer = (state = dataInicial, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case APPLICATION_STATUS:
      return {
        ...state,
        applicationStatus: action.payload,
      };
    case GET_DATA_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case MINT_PROCESS:
      return {
        ...state,
        mintProcess: action.payload[0],
        mintStatus: action.payload[1]
      }
    default:
      return state;
  }
};
