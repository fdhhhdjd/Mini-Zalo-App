//* IMPORT
import { TYPES } from "redux/placeholder/PlaceholderTypes";

export type ResponseData = {
	data: PlaceHolderItem;
};

export interface PlaceHolderItem {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface InitialInterface {
	loading: boolean;
	todos: PlaceHolderItem[];
	error: Error | null;
}

export type TodoAction<T> = {
	type:
		| typeof TYPES.GET_PLACEHOLDER_PENDING
		| typeof TYPES.GET_PLACEHOLDER_SUCCESS
		| typeof TYPES.GET_PLACEHOLDER_ERROR;
	payload?: T;
};

export type PlaceHolderData = PlaceHolderItem;
