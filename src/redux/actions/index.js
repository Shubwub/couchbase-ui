import {
  ADD_NUMBER,
  CLEAR_NUMBER,
  DELETE_LAST_NUMBER,
  STORE_MNEMONICS,
  TOGGLE_LOADING,
  SET_WARNING,
} from "../constants/actionTypes";

/**
 *  Apends a number to the number stored in the redux store.
 *
 *  @param {number} payload - The number to be appended to key, entered in the keypad.
 */
export const addNumber = (payload) => ({ type: ADD_NUMBER, payload });

/**
 *  Resets the number in the redux store back to 0.
 */
export const clearNumber = () => ({ type: CLEAR_NUMBER });

/**
 *  Removes the last number appended to the stored value in the redux store.
 */
export const removeLastNumber = () => ({
  type: DELETE_LAST_NUMBER,
});

/**
 *  Stores an array of returned mnemonics to the redux store.
 *
 *  @param {string[]} payload - An array of mnemonics to be stored.
 */
export const storeMnemonics = (payload) => ({ type: STORE_MNEMONICS, payload });

/**
 *  Sets wether the warning message is on or off depending on if the user has entered the max allowed numbers.
 *
 *  @param {boolean} payload - True for if the warning should show and false for if it shouldn't.
 */
export const setWarning = (payload) => ({ type: SET_WARNING, payload });
