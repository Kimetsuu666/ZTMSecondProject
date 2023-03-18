import { CategoryItem } from '../categories/categoryTypes';

export enum CART_ACTIONS {
	SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
	SET_CART_COUNT = 'cart/SET_CART_COUNT',
	SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
	TOGGLE_CARD_MODAL = 'cart/TOGGLE_CARD_MODAL'
}

export type CartItem = CategoryItem & {
	quantity: number;
};
