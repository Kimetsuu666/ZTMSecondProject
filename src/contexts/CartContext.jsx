import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: true,
	setIsCartOpen: () => {}
});

export function CartProvider({children}) {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const value = { isCartOpen, setIsCartOpen };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
