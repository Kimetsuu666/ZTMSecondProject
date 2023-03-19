import { CartItemContainer, ItemDetails } from './CartItemStyles';
import { CartItem as TCartItem } from '../../store/cart/cartTypes';
import { memo } from 'react';

type CartItemProps = {
	cartItem: TCartItem
}

export const CartItem = memo(({ cartItem }: CartItemProps) => {
	return (
		<CartItemContainer>
			<img src={cartItem.imageUrl} alt={cartItem.name}/>
			<ItemDetails>
				<span className='name'>{cartItem.name}</span>
				<span className='price'>{cartItem.quantity} x {cartItem.price}</span>
			</ItemDetails>
		</CartItemContainer>
	);
})
