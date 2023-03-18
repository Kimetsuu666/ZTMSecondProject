import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducerUtils';
import { CART_ACTIONS, CartItem } from './cartTypes';
import { CategoryItem } from '../categories/categoryTypes';

const addCartItem = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
	const existingCartItem = cartItems.find(item => item.id === product.id);

	if (existingCartItem) {
		return cartItems.map(item => item.id === product.id
			? { ...item, quantity: item.quantity + 1 }
			: item
		);
	}

	return [...cartItems, { ...product, quantity: 1 }];
}

const removeCartItem = (cartItems: CartItem[], cartItemRemove: CartItem): CartItem[] => {
	if (cartItemRemove.quantity === 1) {
		return cartItems.filter(item => item.id !== cartItemRemove.id)
	}

	return cartItems.map(item => {
		if (item.id === cartItemRemove.id) {
			return { ...item, quantity: item.quantity - 1 };
		}
		return item;
	})
}

const clearCartItem = (cartItems: CartItem[], productId: number): CartItem[] => cartItems.filter(item => item.id !== productId);

export type SetIsCartOpen = Action<CART_ACTIONS.TOGGLE_CARD_MODAL>;

export type SetCartItems = ActionWithPayload<CART_ACTIONS.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTIONS.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItem[], product: CategoryItem) => {
	const newCartItems =  addCartItem(cartItems, product);

	return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) => {
	const newCartItems =  removeCartItem(cartItems, product);

	return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], productId: number) => {
	const newCartItems =  clearCartItem(cartItems, productId);

	return setCartItems(newCartItems);
}

export const setIsCartOpen = withMatcher((): SetIsCartOpen => createAction(CART_ACTIONS.TOGGLE_CARD_MODAL));
