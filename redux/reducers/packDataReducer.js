import { HYDRATE } from "next-redux-wrapper";

const dataInicial = {
  pack: undefined,
};

export const SELECTED_PACK = "SELECTED_PACK";

export const packDataReducer = (state = dataInicial, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    case SELECTED_PACK:
      return {
        ...state,
        pack: action.payload
      };
    default:
      return state;
  }
};
