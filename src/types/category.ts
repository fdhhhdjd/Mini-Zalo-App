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
}
export interface Product {
	title: string;
}
export interface InitialInterface {
	isLoading: boolean;
	categories: CategoriesItem[];
	error: Error | null;
}

export type CategoriesAction<T> = {
	type: typeof TYPES.GET_CATEGORY_PENDING | typeof TYPES.GET_CATEGORY_SUCCESS | typeof TYPES.GET_CATEGORY_ERROR;
	payload?: T;
};
export type CategoryId = string;
export type CategoriesData = CategoriesItem;
