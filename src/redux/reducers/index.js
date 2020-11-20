import { combineReducers } from "redux";
import keypadReducer from "./keypad.reducer";
import statusReducer from "./status.reducer";

const rootReducer = combineReducers({
  keypad: keypadReducer,
  status: statusReducer,
});

export default rootReducer;
