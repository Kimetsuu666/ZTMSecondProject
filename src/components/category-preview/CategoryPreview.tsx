import { ProductCard } from '../product-card/ProductCard';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer, Preview, Title } from './CategoryPreviewStyles';
import { CategoryItem } from '../../store/categories/categoryTypes';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[]
}

export function CategoryPreview({ title, products }: CategoryPreviewProps) {
	return (
		<CategoryPreviewContainer>
			<Title as={Link} to={title}>
				{title.toUpperCase()}
			</Title>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map(product => (
						<ProductCard product={product} key={product.id} />
					))
				}
			</Preview>
		</CategoryPreviewContainer>
	);
}
