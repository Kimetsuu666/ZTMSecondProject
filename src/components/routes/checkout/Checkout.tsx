import { CheckoutItem } from '../../checkout-item/CheckoutItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../store/cart/cartSelector';
import { PaymentForm } from '../../payment-form/PaymentForm';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './CheckoutStyles';

export function Checkout() {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map(item => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<Total>Total: {total}</Total>
			<PaymentForm />
		</CheckoutContainer>
	);
}
