import { HYDRATE } from "next-redux-wrapper";

const dataInicial = {
  soulboundProcess: false,
  soulboundStatus: 0,
  applicationStatus: "none",
  mintProcess: "none",
  userData: {},
};

export const GET_DATA_USER = "GET_DATA_USER";
export const APPLICATION_STATUS = "APPLICATION_STATUS";
export const SOULBOUND_PROCESS = "SOULBOUND_PROCESS";
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
    case SOULBOUND_PROCESS:
      return {
        ...state,
        soulboundProcess: action.payload[0],
        soulboundStatus: action.payload[1],
      };
    case MINT_PROCESS:
      return {
        ...state,
        mintProcess: action.payload,
      };
    default:
      return state;
  }
};
