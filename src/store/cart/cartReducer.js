import { CART_ACTIONS } from './cartTypes';

const initialState = {
	isCartOpen: false,
	cartItems: []
}

export const cartReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CART_ACTIONS.SET_CART_ITEMS:
			return {
				...state,
				cartItems: action.payload
			};
		case CART_ACTIONS.TOGGLE_CARD_MODAL:
			return {
				...state,
				isCartOpen: !state.isCartOpen
			};
		default:
			return state
	}
}
