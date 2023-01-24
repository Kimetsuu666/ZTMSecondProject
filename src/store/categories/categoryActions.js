import { createAction } from '../../utils/reducer/reducerUtils';
import { CATEGORY_ACTION_TYPES } from './categoryTypes';

export const setCategories = (categories) => createAction(
	CATEGORY_ACTION_TYPES.SET_CATEGORIES,
	categories
);
