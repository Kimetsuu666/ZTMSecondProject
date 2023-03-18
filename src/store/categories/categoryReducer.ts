import { Category } from './categoryTypes';
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from './categoryActions';
import { AnyAction } from 'redux';

export type CategoriesState = {
	readonly categories: Category[],
	readonly isLoading: boolean,
	readonly error: Error | null
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null
};

export const categoryReducer = (state = initialState, action = {} as AnyAction): CategoriesState => {
	if (fetchCategoriesStart.match(action)) {
		return {
			...state,
			isLoading: true
		};
	}

	if (fetchCategoriesSuccess.match(action)) {
		return {
			...state,
			categories: action.payload,
			isLoading: false
		};
	}

	if (fetchCategoriesFailed.match(action)) {
		return {
			...state,
			isLoading: false,
			error: action.payload
		};
	}

	return state;
};
