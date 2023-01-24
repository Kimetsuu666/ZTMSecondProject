import { createAction } from '../../utils/reducer/reducerUtils';
import { CART_ACTIONS } from './cartTypes';

const addCartItem = (cartItems, product) => {
	const existingCartItem = cartItems.find(item => item.id === product.id);

	if (existingCartItem) {
		return cartItems.map(item => item.id === product.id
			? { ...item, quantity: item.quantity + 1 }
			: item
		);
	}

	return [...cartItems, { ...product, quantity: 1 }];
}

const removeCartItem = (cartItems, product) => {
	if (product.quantity === 1) {
		return cartItems.filter(item => item.id !== product.id)
	}

	return cartItems.map(item => {
		if (item.id === product.id) {
			return { ...item, quantity: item.quantity - 1 };
		}
		return item;
	})
}

const clearCartItem = (cartItems, productId) => cartItems.filter(item => item.id !== productId);


export const addItemToCart = (cartItems ,product) => {
	const newCartItems =  addCartItem(cartItems, product);

	return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

export const removeItemFromCart = (cartItems ,product) => {
	const newCartItems =  removeCartItem(cartItems, product);

	return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

export const clearItemFromCart = (cartItems ,productId) => {
	const newCartItems =  clearCartItem(cartItems, productId);

	return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

export const setIsCartOpen = () => createAction(CART_ACTIONS.TOGGLE_CARD_MODAL);
