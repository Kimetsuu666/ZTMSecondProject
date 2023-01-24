import './product.scss'
import { Button, BUTTON_TYPES } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelector';

export function ProductCard({ product }) {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems)

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

	return (
		<div className='product-card-container'>
			<img src={product.imageUrl} alt={product.name} />
			<div className='footer'>
				<span className='name'>{product.name}</span>
				<span className='price'>{product.price}</span>
			</div>
			<Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart} >Add to cart</Button>
		</div>
	);
}
