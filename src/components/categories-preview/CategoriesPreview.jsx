import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { CategoryPreview } from '../category-preview/CategoryPreview';

export function CategoriesPreview() {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<>
			{Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];

				return (
					<CategoryPreview key={title} products={products} title={title}/>
				)
			})}
		</>
	);
}
