import { HYDRATE } from "next-redux-wrapper";

const dataInicial = {
  subscription: false,
  buyProcess: false,
  buyStatus: 0,
  totalWallets: 0,
  inUseWallets: 0
};

export const PURCHASE_SUBSCRIPTION = "PURCHASE_SUBSCRIPTION";
export const BUY_PROCESS = "BUY_PROCESS";
export const COUNTER_WALLETS = "COUNTER_WALLETS";

export const web3DataReducer = (state = dataInicial, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    case PURCHASE_SUBSCRIPTION:
      return {
        ...state,
        subscription: action.payload
      };
    case BUY_PROCESS:
      return {
        ...state,
        buyProcess: action.payload[0],
        buyStatus: action.payload[1]
      };

    case COUNTER_WALLETS:
      return {
        ...state,
        inUseWallets: action.payload[1],
        totalWallets: action.payload[0]
      };

    default:
      return state;
  }
};
