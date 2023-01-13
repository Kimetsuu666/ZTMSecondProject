import { createContext, useState } from 'react';
import productsJson from '../shop-data.json';

export const ProductsContext = createContext({
	products: []
})

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(productsJson);
	const value = { products };

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
