import './shop.scss';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../../categories-preview/CategoriesPreview';
import { Category } from '../category/Category';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase';
import { useEffect } from 'react';
import { setCategories } from '../../../store/categories/categoryActions';
import { useDispatch } from 'react-redux';

export function Shop() {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categories = await getCategoriesAndDocuments();
			dispatch(setCategories(categories));
		};

		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
