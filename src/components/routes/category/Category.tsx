import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategory } from '../../../store/categories/categorySelector';
import { Spinner } from '../../../spinner/Spinner';
import { CategoryContainer, CategoryTitle } from './CategoryStyles';

type CategoryRouteParams = {
	category: string;
}

export function Category() {
	const categories = useSelector(selectCategory);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
	const [products, setProducts] = useState(categories[category]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{
				isLoading ? (<Spinner />) :
					(<CategoryContainer>
						{products?.map(product => <ProductCard key={product.id} product={product} />)}
					</CategoryContainer>)
			}
		</>
	);
}
