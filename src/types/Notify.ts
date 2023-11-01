//* IMPORT

import { TYPES } from "redux/notification/Types";

export type ResponseNotifyData = {
	data: {
		records: NotifyItem;
	};
};

export interface NotifyItem {
	id: string;
	fields: NotifyFields;
}

export interface NotifyFields {
	title: string;
	status: string;
	description: string;
}

export interface InitialInterface {
	isLoading: boolean;
	notify: NotifyItem[];
	error: Error | null;
}

export type NotifyAction<T> = {
	type:
		| typeof TYPES.GET_NOTIFICATION_PENDING
		| typeof TYPES.GET_NOTIFICATION_SUCCESS
		| typeof TYPES.GET_NOTIFICATION_ERROR;
	payload?: T;
};

export type NotifyData = NotifyItem;
