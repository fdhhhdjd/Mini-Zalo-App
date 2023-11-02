//* IMPORT
import { ProductAction, InitialInterface } from "types/search";

import { TYPES } from "./Types";

const initialState: InitialInterface = {
	loading: false,
	resultProduct: [],
	error: null
};

const ResultProductReducer = (
	state: InitialInterface = initialState,
	action: ProductAction<undefined | string[] | Error>
) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.SEARCH_PRODUCT_PENDING:
			return {
				...state,
				loading: true
			};

		// Todo: 2. Success
		case TYPES.SEARCH_PRODUCT_SUCCESS:
			return {
				...state,
				resultProduct: payload,
				loading: false
			};
		// Todo: 3. Error
		case TYPES.SEARCH_PRODUCT_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return {
				...state
			};
	}
};
export default ResultProductReducer;
