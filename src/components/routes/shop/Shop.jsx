import './shop.scss';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../../categories-preview/CategoriesPreview';
import { Category } from '../category/Category';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '../../../store/categories/categoryActions';
import { useDispatch } from 'react-redux';

export function Shop() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCategoriesAsync());
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
