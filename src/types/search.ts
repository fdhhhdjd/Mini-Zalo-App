import { TYPES } from "redux/search/Types";

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
	variants?: Variant[];
}

export interface InitialInterface {
	loading: boolean;
	resultProduct: ProductItem[];
	error: Error | null;
}

export interface Option {
	key: string;
	label: string;
	priceChange?: {
		type: string;
		percent?: number;
		amount?: number;
	};
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
	id: string;
	fields: ProductField;
}

export type ProductAction<T> = {
	type: typeof TYPES.SEARCH_PRODUCT_PENDING | typeof TYPES.SEARCH_PRODUCT_SUCCESS | typeof TYPES.SEARCH_PRODUCT_ERROR;
	payload?: T;
};

export type ProductType = ProductItem;
