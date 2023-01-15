import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: true,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0
});

export function CartProvider({children}) {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	const addItemToCart = (product) => {
		const newCartItems =  addCartItem(cartItems, product);

		setCartItems(newCartItems);
	}

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount);
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
