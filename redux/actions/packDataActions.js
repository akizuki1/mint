import {
  SELECTED_PACK
} from "../reducers/packDataReducer";

export const selectPack = (pack) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_PACK,
      payload: pack
    });
  } catch (error) {
    console.log("error selecting pack");
  }
};
