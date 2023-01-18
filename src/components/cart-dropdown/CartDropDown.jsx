import { Button } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { CartItems, DropDownContainer, EmptyMessage } from './CartDropDownStyles';

export function CartDropDown() {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	}

	return (
		<DropDownContainer>
			<CartItems>
				{!!cartItems.length
					? (cartItems.map(cartItem => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					)))
					: (<EmptyMessage>Your cart is empty</EmptyMessage>)
				}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</DropDownContainer>
	);
}
