import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export function CartIcon() {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingBag className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
}
