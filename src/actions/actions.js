import * as actionTypes from "./actionTypes";

export const setConversion = conversion => {
  return {
    type: actionTypes.SET_CONVERSION,
    conversion
  };
};
