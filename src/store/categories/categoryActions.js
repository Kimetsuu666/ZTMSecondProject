import { createAction } from '../../utils/reducer/reducerUtils';
import { CATEGORY_ACTION_TYPES } from './categoryTypes';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

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

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categories = await getCategoriesAndDocuments();
		dispatch(fetchCategoriesSuccess(categories));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error))
	}
}
