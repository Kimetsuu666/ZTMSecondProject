import { CartItem } from './cartTypes';
import { AnyAction } from 'redux';
import { setCartItems, setIsCartOpen } from './cartActions';

export type CartState = {
	readonly isCartOpen: boolean,
	readonly cartItems: CartItem[]
}


const initialState: CartState = {
	isCartOpen: false,
	cartItems: []
}

export const cartReducer = (state = initialState, action: AnyAction): CartState => {
	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload
		};
	}

	if (setIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: !state.isCartOpen
		};
	}

	return state;
}
