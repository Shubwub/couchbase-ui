import { ADD_NUMBER } from "../constants/actionTypes";

/**
 *  @param {number} payload - The number to be appended to key, entered in the keypad.
 */
export const addNumber = (payload) => ({ type: ADD_NUMBER, payload });
