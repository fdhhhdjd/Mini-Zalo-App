import { TYPES } from "redux/cart/Types";

import { ProductItems } from "./product";

export type SelectedOptions = Record<string, string | string[]>;

export interface CartItem {
	product: ProductItems;
	options: SelectedOptions;
	quantity: number;
}

export interface InitialDefaultCart {
	cart: Cart;
	totalQuantity: number;
	totalPrice: number;
}

export type Cart = CartItem[];

export type CartAction<T> = {
	type: typeof TYPES.GET_CART_SUCCESS | typeof TYPES.GET_TOTAL_QUANTITY;
	payload: T;
};
