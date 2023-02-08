import {
  GET_DATA_USER,
  APPLICATION_STATUS,
  MINT_PROCESS,
} from "../reducers/web3DataReducer";
import { GetUserService } from "../../services/getUserService";
import { ApplicationService } from "../../services/applicationService";
import { Mint } from "../../services/mintService";

export const getUserData = (address, token) => async (dispatch) => {
  let status = "";

  try {
    const user = await GetUserService(address, token);

    if (user.token === undefined) {
      if (user.application === undefined) {
        status = "application pending";
      } else {
        status = "mint pending";
      }
    } else {
      status = "mint done";
    }

    dispatch({
      type: APPLICATION_STATUS,
      payload: status,
    });
    dispatch({
      type: GET_DATA_USER,
      payload: user,
    });
  } catch (error) {
    console.log("error getting user data ");
  }
};

export const modalApplication = (status) => async (dispatch) => {
  try {
    dispatch({
      type: APPLICATION_STATUS,
      payload: status,
    });
  } catch (error) {
    console.log("error on status modal");
  }
};

export const launchApplication =
  (wallet, jwtToken, discordID, twitterUrl, valueLife, successInvictus) =>
  async (dispatch) => {
    console.log(successInvictus);
    try {
      const data = await ApplicationService(
        wallet,
        jwtToken,
        discordID,
        twitterUrl,
        valueLife,
        successInvictus
      );
      if (data) {
        const userData = {
          application: {
            discordID: discordID,
            twitterUrl: twitterUrl,
            valueLife: valueLife,
            successInvictus: successInvictus,
            v: data.v,
            r: data.r,
            s: data.s,
            messageHash: data.messageHash,
          },
        };
        dispatch({
          type: GET_DATA_USER,
          payload: userData,
        });
        dispatch({
          type: APPLICATION_STATUS,
          payload: "application success",
        });
      }
    } catch (error) {
      console.log("application failed");

      dispatch({
        type: APPLICATION_STATUS,
        payload: "application failed",
      });
    }
  };

export const mintToken = (wallet, userData) => async (dispatch) => {
  try {
    Mint(
      wallet,
      userData.application.messageHash,
      userData.application.v,
      userData.application.r,
      userData.application.s,
      () => {
        dispatch({
          type: MINT_PROCESS,
          payload: ["pending", 7],
        });
      },
      () => {
        dispatch({
          type: MINT_PROCESS,
          payload: ["success", 8],
        });
      },
      () => {
        dispatch({
          type: MINT_PROCESS,
          payload: ["error", 9],
        });
      }
    );
  } catch (error) {
    console.log("error minting");
    dispatch({
      type: MINT_PROCESS,
      payload: ["error", 3],
    });
  }
};

export const closeModal = () => async (dispatch) => {
  try {
    dispatch({
      type: MINT_PROCESS,
      payload: [false, 0],
    });
  } catch (error) {
    console.log("error close modal");
  }
};
