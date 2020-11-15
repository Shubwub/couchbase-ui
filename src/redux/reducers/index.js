import { combineReducers } from "redux";
import keypadReducer from "./keypad.reducer";

const rootReducer = combineReducers({
  keypad: keypadReducer,
});

export default rootReducer;
