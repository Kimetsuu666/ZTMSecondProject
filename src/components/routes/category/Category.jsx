import './category.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { ProductCard } from '../../product-card/ProductCard';

export function Category() {
	const { categoriesMap } = useContext(CategoriesContext);
	const { category } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='category-container'>
				{products?.map(product => <ProductCard key={product.id} product={product} />)}
			</div>
		</>
	);
}
