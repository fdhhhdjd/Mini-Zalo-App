//* IMPORT
import { TYPES } from "redux/product/Types";

import { CategoryId } from "./category";

export type ResponseProductData = {
	data: {
		records: ProductItem;
	};
};

export interface PercentSale {
	type: "percent";
	percent: number;
}

export interface FixedSale {
	amount: number;
	type: "fixed";
}

export type Sale = PercentSale | FixedSale;

export interface Option {
	key: string;
	label?: string;
	priceChange?: Sale;
}

export interface BaseVariant {
	key: string;
	label?: string;
	options: Option[];
}

export interface SingleOptionVariant extends BaseVariant {
	type: "single";
	default?: string;
}

export interface MultipleOptionVariant extends BaseVariant {
	type: "multiple";
	default?: string[];
}

export type Variant = SingleOptionVariant | MultipleOptionVariant;

export interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	categoryId: CategoryId[];
	description?: string;
	sale?: Sale;
	variants?: any;
}

export interface ProductItems {
	id: number | string;
	fields: ProductField;
}

export interface InitialProdInterface {
	isLoading: boolean;
	products: ProductItems[];
	error: Error | null;
}
export interface InitialInterface {
	isLoading: boolean;
	products: ProductItem[];
	productsResult: ProductItem[];
	error: Error | null;
}

export interface ProductField {
	name: string;
	category_id: string[];
	sold: number;
	image: string;
	description: string;
	sale_id: string[];
	price: number;
	code: number;
	banner: string[];
}
export interface ProductItem {
	id: string | number;
	fields: ProductField;
}

export type ProductAction<T> = {
	type: typeof TYPES.GET_PRODUCT_PENDING | typeof TYPES.GET_PRODUCT_SUCCESS | typeof TYPES.GET_PRODUCT_ERROR;
	payload?: T;
};

export type ProductType = ProductItem;
