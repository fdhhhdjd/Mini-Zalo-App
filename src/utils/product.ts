import { TYPE_SALE_NUMBER, TYPE_SALE_STRING } from "common/constants";
import _ from "lodash";
import { SelectedOptions } from "types/cart";
import { Option, ProductField, ProductItems } from "types/product";
import { createOrder } from "zmp-sdk";

import { getConfig } from "./config";

export function calcFinalPrice(product: ProductField, options?: SelectedOptions) {
	let finalPrice = product?.price;

	if (product?.amount_price_sale) {
		if (product.type_sale[0] === "10") {
			finalPrice = product.price - product.amount_price_sale[0];
		} else {
			finalPrice = product.price * (1 - product.amount_price_sale[0]);
		}
	}
	if (options && product?.variants) {
		const selectedOptions: Option[] = [];
		for (const variantKey in options) {
			const parserProduct = product.variants;
			const variant = parserProduct?.find((v) => v.key === variantKey);
			if (variant) {
				const currentOption = options[variantKey];
				if (typeof currentOption === "string") {
					const selected = variant.options?.find((o) => o.key === currentOption);
					if (selected) {
						selectedOptions.push(selected);
					}
				} else {
					const selecteds = variant.options?.filter((o) => currentOption.includes(o.key));
					if (!selecteds) return;
					selectedOptions.push(...selecteds);
				}
			}
		}
		finalPrice = selectedOptions.reduce((price, option) => {
			if (option.priceChange) {
				const amount = option?.priceChange?.amount ?? 0;
				const percent = option?.priceChange?.percent ?? 0;
				if (option.priceChange?.type === "fixed") {
					return price + amount;
				} else {
					return price + product.price * percent;
				}
			}
			return price;
		}, finalPrice);
	}
	return finalPrice;
}

export function getDummyImage(filename: string) {
	return `https://zalo-miniapp.github.io/zaui-coffee/dummy/${filename}`;
}

export function isIdentical(option1: SelectedOptions, option2: SelectedOptions) {
	const option1Keys = Object.keys(option1);
	const option2Keys = Object.keys(option2);

	if (option1Keys.length !== option2Keys.length) {
		return false;
	}

	for (const key of option1Keys) {
		const option1Value = option1[key];
		const option2Value = option2[key];

		const isEqual =
			Array.isArray(option1Value) &&
			Array.isArray(option2Value) &&
			[...option1Value].sort().toString() === [...option2Value].sort().toString();

		if (option1Value !== option2Value && !isEqual) {
			return false;
		}
	}

	return true;
}

export const getStatusType = (status: string) => {
	const typeNumber = _.toNumber(status);
	switch (typeNumber) {
		case TYPE_SALE_NUMBER.FIXED:
			return TYPE_SALE_STRING.FIXED;
		case TYPE_SALE_NUMBER.PRESENT:
			return TYPE_SALE_STRING.PRESENT;
		default:
			return "unknown";
	}
};

export const recommendProductsState = (products: ProductItems[]) => {
	return products.filter((p) => p.fields);
};

const pay = (amount: number, description?: string) => {
	return createOrder({
		desc: description ?? `Thanh toán cho ${getConfig((config) => config.app.title)}`,
		item: [],
		amount: amount,
		success: (data) => {
			console.info("Payment success: ", data);
		},
		fail: (err) => {
			console.info("Payment error: ", err);
		}
	});
};

export default pay;
