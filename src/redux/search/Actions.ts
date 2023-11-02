//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { ProductItem, ResponseProductData } from "types/search";

import { TYPES } from "./Types";

//* Started pending thunk
const searchProductPending = () => {
	return {
		type: TYPES.SEARCH_PRODUCT_PENDING
	} as const;
};

//* Get data for thunk
const searchProductSuccess = (data: ProductItem[]) => {
	return {
		type: TYPES.SEARCH_PRODUCT_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const searchProductError = (error: Error) => {
	return {
		type: TYPES.SEARCH_PRODUCT_ERROR,
		payload: error
	} as const;
};

// Action thunk Get data for Banner
export const getProductSearchKey = (payload: ProductItem[]): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: ProductItem[] | Error }) => void) => {
		try {
			dispatch(searchProductPending());
			setTimeout(() => {
				dispatch(searchProductSuccess(payload));
			}, 1000);
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(searchProductError(error));
			}
		}
	};
};
