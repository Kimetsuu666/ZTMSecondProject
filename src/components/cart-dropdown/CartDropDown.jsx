import './cart-drop-down.scss';
import { Button } from '../button/Button';

export function CartDropDown() {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items' />
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
}
