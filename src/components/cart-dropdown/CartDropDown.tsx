import { Button } from '../button/Button';
import { CartItem } from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { CartItems, DropDownContainer, EmptyMessage } from './CartDropDownStyles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { useCallback } from 'react';

export function CartDropDown() {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = useCallback(() => {
		navigate('/checkout');
	}, [])

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
