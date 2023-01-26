import { CATEGORY_ACTION_TYPES } from './categoryTypes';

const initialState = {
	categories: [],
	isLoading: false,
	error: null
};

export const categoryReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
			return {
				...state,
				isLoading: true
			};
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.payload,
				isLoading: false
			};
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		default:
			return state;
	}
};
