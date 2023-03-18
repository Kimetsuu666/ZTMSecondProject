import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIconStyles';
import { selectCartCount } from '../../store/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartActions';

export function CartIcon() {
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();

	const toggleIsCartOpen = () => dispatch(setIsCartOpen());
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}
