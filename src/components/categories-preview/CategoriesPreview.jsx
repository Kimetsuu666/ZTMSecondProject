import { CategoryPreview } from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../store/categories/categorySelector';

export function CategoriesPreview() {
	const categories = useSelector(selectCategory);

	return (
		<>
			{Object.keys(categories).map(title => {
				const products = categories[title];

				return (
					<CategoryPreview key={title} products={products} title={title}/>
				)
			})}
		</>
	);
}
