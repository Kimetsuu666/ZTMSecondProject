import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: true,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	total: 0
});

export function CartProvider({children}) {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [total, setTotal] = useState(0);

	const addItemToCart = (product) => {
		const newCartItems =  addCartItem(cartItems, product);

		setCartItems(newCartItems);
	}

	const removeItemFromCart = (product) => {
		const newCartItems =  removeCartItem(cartItems, product);

        setCartItems(newCartItems);
	}

	const clearItemFromCart = (productId) => {
		const newCartItems =  clearCartItem(cartItems, productId);

		setCartItems(newCartItems);
	}

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, total };

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
		setTotal(newTotal);
	}, [cartItems]);

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

