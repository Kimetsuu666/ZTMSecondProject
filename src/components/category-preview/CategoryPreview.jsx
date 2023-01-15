import './category-preview.scss';
import { ProductCard } from '../product-card/ProductCard';
import { Link } from 'react-router-dom';

export function CategoryPreview({ title, products }) {
	return (
		<div className='category-preview-container'>
			<h2>
				<Link to={title} className='title'>{title.toUpperCase()}</Link>
			</h2>
			<div className='preview'>
				{products
					.filter((_, index) => index < 4)
					.map(product => (
						<ProductCard product={product} key={product.id} />
					))
				}
			</div>
		</div>
	);
}
