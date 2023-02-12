import { createAction } from '../../utils/reducer/reducerUtils';
import { CATEGORY_ACTION_TYPES } from './categoryTypes';

export const fetchCategoriesStart = () => createAction(
	CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START
);

export const fetchCategoriesSuccess = (categories) => createAction(
	CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	categories
);

export const fetchCategoriesFailed = (error) => createAction(
	CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
	error
);
