import { SET_NUMBER } from "../constants/actionTypes";

/**
 *  @param {number} payload - The number to be displayed, entered in the keypad.
 */
export const setData = (payload) => ({ type: SET_NUMBER, payload });
