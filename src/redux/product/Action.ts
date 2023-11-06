//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { ProductItems, ResponseProductData } from "types/product";

import { TYPES } from "./Types";

//* Started pending
const getDataProductPending = () => {
	return {
		type: TYPES.GET_PRODUCT_PENDING
	} as const;
};

//* Get data for thunk
const getDataProductSuccess = (data: ProductItems) => {
	return {
		type: TYPES.GET_PRODUCT_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataProductError = (error: Error) => {
	return {
		type: TYPES.GET_PRODUCT_ERROR,
		payload: error
	} as const;
};

//* Action thunk get data for product
export const getProductInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: ProductItems | Error }) => void) => {
		try {
			dispatch(getDataProductPending());
			const response: ResponseProductData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.PRODUCT}`
			); //API_SERVER
			dispatch(getDataProductSuccess(response.data.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataProductError(error));
			}
		}
	};
};
