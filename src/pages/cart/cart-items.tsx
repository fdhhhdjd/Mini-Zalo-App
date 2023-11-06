import { KEY_LOCAL_STORAGE } from "common/constants";
import { FinalPrice } from "components/display/final-price";
import { DisplaySelectedOptions } from "components/display/selected-options";
import { ListRenderer } from "components/list-renderer";
import { ProductPicker } from "components/product/picker";
import useSelectorCart from "hooks/useSelectorCart";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartSuccessAction } from "redux/cart/Actions";
import { CartItem } from "types/cart";
import { saveToLocalStorage } from "utils/local-storage";
import { Box, Button, Icon, Text } from "zmp-ui";

export const CartItems: FC = () => {
	const cart = useSelectorCart();
	const productListInCart = cart.cart;
	const dispatch = useDispatch();
	const [editingItem, setEditingItem] = useState<CartItem | undefined>();
	const removeItem = (itemToRemove: CartItem) => {
		const updatedCartData = productListInCart.filter((item) => item !== itemToRemove);
		dispatch(getCartSuccessAction(updatedCartData));
	};
	const removeAllItems = () => {
		// Update the cart by assigning an empty list
		dispatch(getCartSuccessAction([]));
	};
	useEffect(() => {
		saveToLocalStorage(KEY_LOCAL_STORAGE.KEY_CART, JSON.stringify(productListInCart));
	}, [productListInCart]);

	return (
		<Box className="py-3 px-4">
			{productListInCart.length > 0 ? (
				<React.Fragment>
					<ProductPicker product={editingItem?.product} selected={editingItem}>
						{({ open }) => (
							<ListRenderer
								items={productListInCart}
								limit={3}
								onClick={(item) => {
									setEditingItem(item);
									open();
								}}
								renderKey={({ product, options, quantity }) =>
									JSON.stringify({ product: product.id, options, quantity })
								}
								renderLeft={(item) => (
									// eslint-disable-next-line jsx-a11y/alt-text
									<img className="w-10 h-10 rounded-lg" src={item.product.fields.image} />
								)}
								renderRight={(item) => (
									<Box flex className="space-x-1">
										<Box className="space-y-1 flex-1">
											<Text size="small">{item.product.fields.name}</Text>
											<Text className="text-gray" size="xSmall">
												<FinalPrice options={item.options}>{item.product.fields}</FinalPrice>
											</Text>
											<Text className="text-gray" size="xxxSmall">
												<DisplaySelectedOptions options={item.options}>
													{item.product.fields}
												</DisplaySelectedOptions>
											</Text>
										</Box>
										<Text className="text-primary font-medium" size="small">
											x{item.quantity}
										</Text>
										<Button
											onClick={() => removeItem(item)}
											variant="tertiary"
											icon={<Icon icon="zi-close-circle" />}
										/>
									</Box>
								)}
							/>
						)}
					</ProductPicker>
					<Box flex className="space-x-1 flex justify-center zaui-box p-4">
						<Text className="text-red-700 font-medium cursor-pointer" onClick={removeAllItems}>
							Xóa toàn bộ
						</Text>
					</Box>
				</React.Fragment>
			) : (
				<Text className="bg-background rounded-xl py-8 px-4 text-center text-gray" size="xxSmall">
					Không có sản phẩm trong giỏ hàng
				</Text>
			)}
		</Box>
	);
};
