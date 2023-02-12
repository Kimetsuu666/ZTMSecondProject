import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categoryActions';
import { CATEGORY_ACTION_TYPES } from './categoryTypes';

export function* fetchCategoriesAsync() {
	try {
		const categories = yield call(getCategoriesAndDocuments, '');
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}

export function* onFetchCategories() {
	yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
