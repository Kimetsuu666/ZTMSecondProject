import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cartActions';
import { Arrow, CheckoutItemWrapper, ImageContainer, Info, Quantity, RemoveButton } from './CheckoutItemStyles';

export function CheckoutItem({ cartItem }) {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems ,cartItem.id));
	const addItemHandler = () => dispatch(addItemToCart(cartItems ,cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems ,cartItem));

	return (
		<CheckoutItemWrapper>
			<ImageContainer>
				<img src={cartItem.imageUrl} alt={cartItem.name} />
			</ImageContainer>
			<Info>{cartItem.name}</Info>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<span style={{ margin: '0 10px' }}>{cartItem.quantity}</span>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Info>{cartItem.price}</Info>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemWrapper>
	);
}
