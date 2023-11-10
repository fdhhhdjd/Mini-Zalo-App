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
	label: string;
	priceChange?: {
		type: string;
		percent?: number;
		amount?: number;
	};
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

export type ProductVariants = {
	key: string;
	label: string;
	type: string;
	default?: string | string[];
	options?: Option[];
};

export interface ProductField {
	image: string;
	name: string;
	sold: number;
	price: number;
	category_id: string[];
	sale_id: string[];
	description: string;
	code: number;
	variants: ProductVariants[];
	icon_category: string[];
	name_category: string[];
	status_sale: string[];
	amount_price_sale: number[];
	type_sale: string[];
}
export interface ProductItem {
	id: string | number;
	fields: ProductField;
}

export type ProductAction<T> = {
	type:
		| typeof TYPES.GET_PRODUCT_PENDING
		| typeof TYPES.GET_PRODUCT_SUCCESS
		| typeof TYPES.GET_PRODUCT_ERROR
		| typeof TYPES.SET_PRODUCT_UNMOUNT;
	payload?: T;
};

export type ProductType = ProductItem;
