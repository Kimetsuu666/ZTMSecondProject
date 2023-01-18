import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIconStyles';

export function CartIcon() {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}
