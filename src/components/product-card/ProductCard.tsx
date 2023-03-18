import { Button, BUTTON_TYPES } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelector';
import { Footer, Name, Price, ProductCardContainer } from './ProductCardStyles';
import { CategoryItem } from '../../store/categories/categoryTypes';

type ProductCard = {
	product: CategoryItem
}

export function ProductCard({ product }: ProductCard) {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems)

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

	return (
		<ProductCardContainer>
			<img src={product.imageUrl} alt={product.name} />
			<Footer>
				<Name>{product.name}</Name>
				<Price>{product.price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart} >Add to cart</Button>
		</ProductCardContainer>
	);
}
