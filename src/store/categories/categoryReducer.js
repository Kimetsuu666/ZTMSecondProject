import { CATEGORY_ACTION_TYPES } from './categoryTypes';

const initialState = {
	categories: []
};

export const categoryReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};
		default:
			return state;
	}
};
