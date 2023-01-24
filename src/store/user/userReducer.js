import { USER_ACTION_TYPES } from './userTypes';

const initialState = {
	currentUser: null
};

export const userReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
		default:
			return state
	}
};
