import './product.scss'
import { Button, BUTTON_TYPES } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function ProductCard({ product }) {
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product)

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
