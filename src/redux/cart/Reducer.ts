import { KEY_LOCAL_STORAGE } from "common/constants";
import { Cart, CartAction, CartItem, InitialDefaultCart } from "types/cart";
import { calcFinalPrice } from "utils/product";

import { TYPES } from "./Types";

const cartLocal = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE.KEY_CART) || "");

const initCartState: InitialDefaultCart = {
	cart: cartLocal,
	totalQuantity: cartLocal.reduce((total: number, item: CartItem) => total + item.quantity, 0),
	totalPrice: cartLocal.reduce(
		(total: number, item: CartItem) => total + item.quantity * calcFinalPrice(item.product, item.options),
		0
	)
};

const CartReducer = (state: InitialDefaultCart = initCartState, action: CartAction<Cart>) => {
	const { type, payload } = action;
	switch (type) {
		case TYPES.GET_CART_SUCCESS:
			return {
				...state,
				cart: payload,
				totalQuantity: payload.reduce((total, item) => total + item.quantity, 0),
				totalPrice: payload.reduce(
					(total, item) => total + item.quantity * calcFinalPrice(item.product, item.options),
					0
				)
			};

		default:
			return {
				...state
			};
	}
};

export default CartReducer;
