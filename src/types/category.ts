// export type CategoryId =
//   | "coffee"
//   | "matcha"
//   | "food"
//   | "milktea"
//   | "drinks"
//   | "bread"
//   | "juice";

import { TYPES } from "redux/category/Types";

export type ResponseCategoriesData = {
	data: {
		records: CategoriesItem;
	};
};

export interface CategoriesItem {
	id: CategoryId;
	createdTime: string;
	fields: CategoriesFields;
}

export interface CategoriesFields {
	desciption: string;
	code: number;
	name: string;
	product: Product[];
	icon: string;
	category_id: string;
}
export interface Product {
	title: string;
	id: string;
}
export interface ResponseProduct {
	createdTime: string;
	fields: Product[];
}

export interface InitialInterface {
	isLoading: boolean;
	categories: CategoriesItem[];
	error: Error | null;
}

export type CategoriesAction<T> = {
	type:
		| typeof TYPES.GET_CATEGORY_PENDING
		| typeof TYPES.GET_CATEGORY_SUCCESS
		| typeof TYPES.GET_CATEGORY_ERROR
		| typeof TYPES.SET_CATEGORY_UNMOUNT;
	payload?: T;
};
export type CategoryId = string;
export type CategoriesData = CategoriesItem;
