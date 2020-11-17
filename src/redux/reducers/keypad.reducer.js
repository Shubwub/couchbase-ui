import {
  ADD_NUMBER,
  DELETE_LAST_NUMBER,
  CLEAR_NUMBER,
  STORE_MNEMONICS,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  number: 0,
  mnemonics: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        number: Number("" + state.number + action.payload),
      };
    case CLEAR_NUMBER:
      return {
        ...state,
        number: 0,
        mnemonics: [],
      };
    case DELETE_LAST_NUMBER:
      return {
        ...state,
        number: Math.floor(state.number / 10),
      };
    case STORE_MNEMONICS:
      return {
        ...state,
        mnemonics: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
