//* IMPORT

import { TYPES } from "redux/store/Types";

export type ResponseStoreData = {
	data: {
		records: StoreItem;
	};
};

export interface StoreItem {
	id: string;
	fields: StoreFields;
}

export interface StoreFields {
	long: number;
	lat: number;
	name: string;
	address: string;
	distance: number;
}

export interface InitialInterface {
	isLoading: boolean;
	store: StoreItem[];
	error: Error | null;
}

export type StoreAction<T> = {
	type: typeof TYPES.GET_STORE_PENDING | typeof TYPES.GET_STORE_SUCCESS | typeof TYPES.GET_STORE_ERROR;
	payload?: T;
};

export type StoreData = StoreItem;
