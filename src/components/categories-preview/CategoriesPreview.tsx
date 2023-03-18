import { CategoryPreview } from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategory } from '../../store/categories/categorySelector';
import { Spinner } from '../../spinner/Spinner';

export function CategoriesPreview() {
	const categories = useSelector(selectCategory);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<>
			{isLoading ? <Spinner /> :
				Object.keys(categories).map(title => {
					const products = categories[title];

					return (
						<CategoryPreview key={title} products={products} title={title}/>
					)
				})
			}
		</>
	);
}
