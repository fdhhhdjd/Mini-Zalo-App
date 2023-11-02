//* IMPORT
import { InitialProdInterface, ProductAction } from "types/product";
import { parseData } from "utils/convert";
import { getStatusType } from "utils/product";

import { TYPES } from "./Types";
import { TYPE_SALE_STRING } from "common/constants";

const initialState = {
	loading: false,
	products: [],
	error: null
} as InitialProdInterface;

const ProductReducer = (state: InitialProdInterface = initialState, action: ProductAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		case TYPES.GET_PRODUCT_PENDING:
			return {
				...state,
				loading: true
			};
		case TYPES.GET_PRODUCT_SUCCESS:
			const productsWithParsedVariants = payload?.map((product) => {
				const parsedVariants = parseData(product.fields.variants);
				if (product.fields.type_sale) {
					const typeSale = getStatusType(product.fields.type_sale[0]);
					const typeSaleKey = typeSale === TYPE_SALE_STRING.FIXED ? "amount" : typeSale;
					return {
						...product,
						fields: {
							...product.fields,
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
						variants: parsedVariants
					}
				};
			});
			return {
				...state,
				products: productsWithParsedVariants,
				loading: false
			};
		case TYPES.GET_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				error: payload
			};
		default:
			return {
				...state
			};
	}
};
export default ProductReducer;
