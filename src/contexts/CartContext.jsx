import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducerUtils';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	total: 0
});

const initialState = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	total: 0
}

const CART_ACTIONS = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	TOGGLE_CARD_MODAL: 'TOGGLE_CARD_MODAL'
}

const cartReducer = (state, action) => {
	switch (action.type) {
		case CART_ACTIONS.SET_CART_ITEMS:
			return {
				...state,
				...action.payload
            };
		case CART_ACTIONS.TOGGLE_CARD_MODAL:
			return {
				...state,
				isCartOpen: !state.isCartOpen
			};
		default:
			throw new Error(`Unhandled type ${action.type} in cart reducer`);
	}
}

export function CartProvider({children}) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const { isCartOpen, cartItems, cartCount, total} = state;

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

		dispatch(createAction(
			CART_ACTIONS.SET_CART_ITEMS,
			{
				cartItems: newCartItems,
				cartCount: newCartCount,
				total: newCartTotal
			}
		))
	}

	const addItemToCart = (product) => {
		const newCartItems =  addCartItem(cartItems, product);

		updateCartItemsReducer(newCartItems);
	}

	const removeItemFromCart = (product) => {
		const newCartItems =  removeCartItem(cartItems, product);

		updateCartItemsReducer(newCartItems);
	}

	const clearItemFromCart = (productId) => {
		const newCartItems =  clearCartItem(cartItems, productId);

		updateCartItemsReducer(newCartItems);
	}

	const setIsCartOpen = () => {
		dispatch(createAction(CART_ACTIONS.TOGGLE_CARD_MODAL))
	}

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, total };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

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

