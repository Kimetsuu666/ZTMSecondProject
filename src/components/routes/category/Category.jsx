import './category.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../../store/categories/categorySelector';

export function Category() {
	const categories = useSelector(selectCategory);
	const { category } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='category-container'>
				{products?.map(product => <ProductCard key={product.id} product={product} />)}
			</div>
		</>
	);
}
