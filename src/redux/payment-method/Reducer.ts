//* IMPORT
import { InitialInterface, PaymentMethodAction } from "types/payment-method";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	paymentMethod: [],
	error: null
} as InitialInterface;

const PaymentMethodReducer = (state: InitialInterface = initialState, action: PaymentMethodAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_PAYMENT_METHOD_PENDING:
			return {
				...state,
				isLoading: true
			};

		// Todo: 2. Success
		case TYPES.GET_PAYMENT_METHOD_SUCCESS:
			return {
				...state,
				paymentMethod: payload,
				isLoading: false
			};

		case TYPES.CLEAR_DATA_PAYMENT_METHOD:
			return {
				isLoading: false,
				paymentMethod: [],
				error: null
			};
		// Todo: 3. Error
		case TYPES.GET_PAYMENT_METHOD_ERROR:
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
export default PaymentMethodReducer;
