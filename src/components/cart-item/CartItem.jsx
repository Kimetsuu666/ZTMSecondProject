import { CartItemContainer, ItemDetails } from './CartItemStyles';

export function CartItem({ cartItem }) {
	return (
		<CartItemContainer>
			<img src={cartItem.imageUrl} alt={cartItem.name}/>
			<ItemDetails>
				<span className='name'>{cartItem.name}</span>
				<span className='price'>{cartItem.quantity} x {cartItem.price}</span>
			</ItemDetails>
		</CartItemContainer>
	);
}
