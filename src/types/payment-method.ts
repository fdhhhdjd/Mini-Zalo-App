//* IMPORT

import { TYPES } from "redux/payment-method/Types";

export type ResponsePaymentMethodData = {
	data: {
		records: PaymentMethodItem;
	};
};

export interface PaymentMethodItem {
	id: string;
	fields: PaymentMethodFields;
}

export interface PaymentMethodFields {
	code: number;
	title: number;
	image: string;
	value: string;
}

export interface InitialInterface {
	isLoading: boolean;
	paymentMethod: PaymentMethodItem[];
	error: Error | null;
}

export type PaymentMethodAction<T> = {
	type:
		| typeof TYPES.GET_PAYMENT_METHOD_PENDING
		| typeof TYPES.GET_PAYMENT_METHOD_SUCCESS
		| typeof TYPES.GET_PAYMENT_METHOD_ERROR
		| typeof TYPES.CLEAR_DATA_PAYMENT_METHOD;
	payload?: T;
};

export type PaymentMethodData = PaymentMethodItem;
