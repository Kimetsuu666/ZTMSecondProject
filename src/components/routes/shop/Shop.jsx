import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { ProductCard } from '../../product-card/ProductCard';
import './shop.scss';

export function Shop() {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map(product => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
}
