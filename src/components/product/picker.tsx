import { FinalPrice } from "components/display/final-price";
import { Sheet } from "components/fullscreen-sheet";
import useSelectorCart from "hooks/useSelectorCart";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { getCartSuccessAction } from "redux/cart/Actions";
import { SelectedOptions } from "types/cart";
import { Product } from "types/product";
import { isIdentical } from "utils/product";
import { Box, Button, Text } from "zmp-ui";

import { MultipleOptionPicker } from "./multiple-option-picker";
import { QuantityPicker } from "./quantity-picker";
import { SingleOptionPicker } from "./single-option-picker";


export interface ProductPickerProps {
	product?: Product;
	selected?: {
		options: SelectedOptions;
		quantity: number;
	};
	children: (methods: { open: () => void; close: () => void }) => ReactNode;
}

function getDefaultOptions(product?: Product) {
	if (product && product.variants) {
		return product.variants.reduce(
			(options, variant) =>
				Object.assign(options, {
					[variant.key]: variant.default
				}),
			{}
		);
	}
	return {};
}

export const ProductPicker: FC<ProductPickerProps> = ({ children, product, selected }) => {
	const [isVisible, setVisible] = useState(false);
	const [options, setOptions] = useState<SelectedOptions>(selected ? selected.options : getDefaultOptions(product));
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const cart = useSelectorCart();
	const cartData = cart.cart;

	useEffect(() => {
		if (selected) {
			setOptions(selected.options);
			setQuantity(selected.quantity);
		}
	}, [selected]);

	const addToCart = () => {
		if (product) {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			let res = [...cartData];
			if (selected) {
				// updating an existing cart item, including quantity and size, or remove it if new quantity is 0
				const editing = cartData.find(
					(item) => item.product.id === product.id && isIdentical(item.options, selected.options)
				)!;
				if (quantity === 0) {
					res.splice(cartData.indexOf(editing), 1);
				} else {
					const existed = cartData.find(
						(item, i) =>
						    i !== cartData.indexOf(editing) &&
							item.product.id === product.id &&
							isIdentical(item.options, options)
					)!;
					res.splice(cartData.indexOf(editing), 1, {
						...editing,
						options,
						quantity: existed ? existed.quantity + quantity : quantity
					});
					if (existed) {
						res.splice(cartData.indexOf(existed), 1);
					}
				}
			} else {
				// adding new item to cart, or merging if it already existed before
				const existed = cartData.find(
					(item) => item.product.id === product.id && isIdentical(item.options, options)
				);
				if (existed) {
					res.splice(cartData.indexOf(existed), 1, {
						...existed,
						quantity: existed.quantity + quantity
					});
				} else {
					res = res.concat({
						product,
						options,
						quantity
					});
				}
			}

			dispatch(getCartSuccessAction(res));
		}
		setVisible(false);
	};
	return (
		<>
			{children({
				open: () => setVisible(true),
				close: () => setVisible(false)
			})}
			{createPortal(
				<Sheet visible={isVisible} onClose={() => setVisible(false)} autoHeight>
					{product && (
						<Box className="space-y-6 mt-2" p={4}>
							<Box className="space-y-2">
								<Text.Title>{product.name}</Text.Title>
								<Text>
									<FinalPrice options={options}>{product}</FinalPrice>
								</Text>
								<Text>
									<div
										dangerouslySetInnerHTML={{
											__html: product.description ?? ""
										}}
									></div>
								</Text>
							</Box>
							<Box className="space-y-5">
								{product.variants &&
									product.variants.map((variant) =>
										variant.type === "single" ? (
											<SingleOptionPicker
												key={variant.key}
												variant={variant}
												value={options[variant.key] as string}
												onChange={(selectedOption) =>
													setOptions((prevOptions) => ({
														...prevOptions,
														[variant.key]: selectedOption
													}))
												}
											/>
										) : (
											<MultipleOptionPicker
												key={variant.key}
												product={product}
												variant={variant}
												value={options[variant.key] as string[]}
												onChange={(selectedOption) =>
													setOptions((prevOptions) => ({
														...prevOptions,
														[variant.key]: selectedOption
													}))
												}
											/>
										)
									)}
								<QuantityPicker value={quantity} onChange={setQuantity} />
								{selected ? (
									<Button
										variant={quantity > 0 ? "primary" : "secondary"}
										type={quantity > 0 ? "highlight" : "neutral"}
										fullWidth
										onClick={addToCart}
									>
										{quantity > 0 ? (selected ? "Cập nhật giỏ hàng" : "Thêm vào giỏ hàng") : "Xoá"}
									</Button>
								) : (
									<Button
										disabled={!quantity}
										variant="primary"
										type="highlight"
										fullWidth
										onClick={addToCart}
									>
										Thêm vào giỏ hàng
									</Button>
								)}
							</Box>
						</Box>
					)}
				</Sheet>,
				document.body
			)}
		</>
	);
};
