//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { PaymentMethodItem, ResponsePaymentMethodData } from "types/payment-method";

import { TYPES } from "./Types";

//* Started pending thunk
const getDataPaymentMethodPending = () => {
	return {
		type: TYPES.GET_PAYMENT_METHOD_PENDING
	} as const;
};

//* Get data for thunk
const getDataPaymentMethodSuccess = (data: PaymentMethodItem) => {
	return {
		type: TYPES.GET_PAYMENT_METHOD_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataPaymentMethodError = (error: Error) => {
	return {
		type: TYPES.GET_PAYMENT_METHOD_ERROR,
		payload: error
	} as const;
};

//* Get error for thunk
export const clearDataPaymentMethod = () => {
	return {
		type: TYPES.CLEAR_DATA_PAYMENT_METHOD
	} as const;
};

// Action thunk Get data for Payment method
export const getPaymentMethodInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: PaymentMethodItem | Error }) => void) => {
		try {
			dispatch(getDataPaymentMethodPending());

			const response: ResponsePaymentMethodData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.PAYMENT_METHOD}`
			);
			dispatch(getDataPaymentMethodSuccess(response?.data?.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataPaymentMethodError(error));
			}
		}
	};
};
