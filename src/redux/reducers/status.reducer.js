import { SET_WARNING } from "../constants/actionTypes";

const INITIAL_STATE = {
  warning: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WARNING:
      return {
        ...state,
        warning: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
