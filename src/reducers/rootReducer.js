import * as actionTypes from "../actions/actionTypes";

const initState = {
  conversion: ""
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONVERSION:
      return {
        ...state,
        conversion: action.conversion
      };
    default:
      return state;
  }
};

export default rootReducer;
