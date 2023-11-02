import { Cart } from "types/cart";

import { TYPES } from "./Types";

export const getCartSuccessAction = (data: Cart) => {
    return {
        type: TYPES.GET_CART_SUCCESS,
        payload: data
    };
};
