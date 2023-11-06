import { KEY_LOCAL_STORAGE } from "common/constants";
import { Cart, CartAction, CartItem, InitialDefaultCart } from "types/cart";
import { getFromLocalStorage, saveToLocalStorage } from "utils/local-storage";
import { calcFinalPrice } from "utils/product";

import { TYPES } from "./Types";

const cartLocal = getFromLocalStorage(KEY_LOCAL_STORAGE.KEY_CART) || [];

const initCartState: InitialDefaultCart = {
	cart: cartLocal,
	totalQuantity: cartLocal.reduce((total: number, item: CartItem) => total + item.quantity, 0),
	totalPrice: cartLocal.reduce(
		(total: number, item: CartItem) => total + item.quantity * (calcFinalPrice(item.product.fields, item.options) ?? 0),
		0
	)
};

const CartReducer = (state: InitialDefaultCart = initCartState, action: CartAction<Cart>) => {
	const { type, payload } = action;
	switch (type) {
		case TYPES.GET_CART_SUCCESS:
			const totalQuantity = payload.reduce((total, item) => total + item.quantity, 0);
			const totalPrice = payload.reduce(
				(total, item) => total + item.quantity * (calcFinalPrice(item.product.fields, item.options) ?? 0),
				0
			);
			saveToLocalStorage(KEY_LOCAL_STORAGE.KEY_CART, JSON.stringify(payload));
			return {
				...state,
				cart: payload,
				totalQuantity: totalQuantity,
				totalPrice: totalPrice
			};

		default:
			return {
				...state
			};
	}
};

export default CartReducer;
