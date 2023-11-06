//* IMPORT
import { TYPE_SALE_STRING } from "common/constants";
import { InitialProdInterface, ProductAction, ProductItems } from "types/product";
import { parseData } from "utils/convert";
import { getStatusType } from "utils/product";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	products: [],
	error: null
} as InitialProdInterface;

const ProductReducer = (state: InitialProdInterface = initialState, action: ProductAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		case TYPES.GET_PRODUCT_PENDING:
			return {
				...state,
				isLoading: true
			};
		case TYPES.GET_PRODUCT_SUCCESS:
			const productsWithParsedVariants: ProductItems[] = payload?.map((product: ProductItems) => {
				const variants = product.fields?.variants as unknown as string;
				const parsedVariants = parseData(variants);
				if (product.fields.type_sale) {
					const typeSale = getStatusType(product.fields.type_sale[0]);
					const typeSaleKey = typeSale === TYPE_SALE_STRING.FIXED ? "amount" : typeSale;
					return {
						...product,
						fields: {
							...product.fields,
							id: product.id,
							variants: parsedVariants,
							sale: {
								type: getStatusType(product.fields.type_sale[0]),
								[typeSaleKey]: product.fields.amount_price_sale[0]
							}
						}
					};
				}
				return {
					...product,
					fields: {
						...product.fields,
						id: product.id,
						variants: parsedVariants
					}
				};
			});
			return {
				...state,
				products: productsWithParsedVariants,
				isLoading: false
			};
		case TYPES.GET_PRODUCT_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false
			};
		default:
			return {
				...state
			};
	}
};
export default ProductReducer;
