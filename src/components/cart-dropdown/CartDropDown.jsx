import './cart-drop-down.scss';
import { Button } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';

export function CartDropDown() {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	}

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
}
