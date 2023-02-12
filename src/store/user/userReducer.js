import { USER_ACTION_TYPES } from './userTypes';

const initialState = {
	currentUser: null,
	isLoading: false,
	error: null
};

export const userReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload
			}
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null
			}
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
};
