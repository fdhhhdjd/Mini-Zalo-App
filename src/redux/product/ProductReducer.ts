//* IMPORT
import { InitialProdInterface, ProductAction } from "types/product";

import { TYPES } from "./ProductTypes";

const initialState = {
	loading: false,
	products: [],
	error: null
} as InitialProdInterface;

const ProductReducer = (
	state: InitialProdInterface = initialState,
	action: ProductAction<undefined | string[] | Error>
) => {
	const { type, payload } = action;
	switch (type) {
		case TYPES.GET_PRODUCT_PENDING:
			return {
				...state,
				loading: true
			};
		case TYPES.GET_PRODUCT_SUCCESS:
			return {
				...state,
				products: payload,
				loading: false
			};
		case TYPES.GET_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				error: payload
			};
		default:
			return {
				...state
			};
	}
};
export default ProductReducer;
