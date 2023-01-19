import {
  PURCHASE_SUBSCRIPTION,
  BUY_PROCESS,
  COUNTER_WALLETS
} from "../reducers/web3DataReducer";
import { Subscribe } from "../../services/subscriptionService";
import { GetUserService } from "../../services/getUserService";

export const purchaseSubscription = (wallet, pack) => async (dispatch) => {
  try {
    Subscribe(
      wallet,
      pack,
      () => {
        dispatch({
          type: BUY_PROCESS,
          payload: ["pending", 0]
        });
      },
      () => {
        dispatch({
          type: BUY_PROCESS,
          payload: ["success", 1]
        });
      },
      () => {
        dispatch({
          type: BUY_PROCESS,
          payload: ["error", 2]
        });
      }
    );
  } catch (error) {
    console.log("error purchasing subscription");
    dispatch({
      type: BUY_PROCESS,
      payload: ["error", 2]
    });
  }
};
export const buyProcess = (process, status) => async (dispatch) => {
  try {
    dispatch({
      type: BUY_PROCESS,
      payload: [process, status]
    });
  } catch (error) {
    console.log("error purchasing subscription");
  }
};

export const getUserData = (wallet, token) => async (dispatch) => {
  try {
    const data = await GetUserService(wallet, token);

    dispatch({
      type: COUNTER_WALLETS,
      payload: [data.walletCount, data.wallets.length]
    });
  } catch (error) {
    console.log("error getting wallets");
  }
};
