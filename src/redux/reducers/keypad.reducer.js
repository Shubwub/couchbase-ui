import { SET_NUMBER } from "../constants/actionTypes";

const INITIAL_STATE = {
	number: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_NUMBER:
			return {
				...state,
				number: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
