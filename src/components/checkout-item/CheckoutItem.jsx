import './checkout-item.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cartActions';

export function CheckoutItem({ cartItem }) {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems ,cartItem.id));
	const addItemHandler = () => dispatch(addItemToCart(cartItems ,cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems ,cartItem));

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={cartItem.imageUrl} alt={cartItem.name} />
			</div>
			<span className='name'>{cartItem.name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandler}>&#10094;</div>
				<span className='value'>{cartItem.quantity}</span>
				<div className='arrow' onClick={addItemHandler}>&#10095;</div>
			</span>
			<span className='price'>{cartItem.price}</span>
			<div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
		</div>
	);
}
