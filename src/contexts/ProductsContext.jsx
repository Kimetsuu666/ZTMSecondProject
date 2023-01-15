import { createContext, useEffect, useState } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase';

export const ProductsContext = createContext({
	products: []
})

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const value = { products };

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
