import { CartItemContainer, ItemDetails } from './CartItemStyles';
import { CartItem as TCartItem } from '../../store/cart/cartTypes';

type CartItemProps = {
	cartItem: TCartItem
}

export function CartItem({ cartItem }: CartItemProps) {
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
