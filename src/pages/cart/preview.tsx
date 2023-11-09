import { KEY_LOCAL_STORAGE } from "common/constants";
import { DisplayPrice } from "components/display/price";
import CoreLoading from "components/SpinnerLoading";
import useSelectorCart from "hooks/useSelectorCart";
import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getCartSuccessAction } from "redux/cart/Actions";
import { removeFromLocalStorage } from "utils/local-storage";
import { Box, Button, Text } from "zmp-ui";

export const CartPreview: FC = () => {
	const cart = useSelectorCart();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();

	const handleSuccess = useCallback(() => {
		setIsLoading(true);
		removeFromLocalStorage(KEY_LOCAL_STORAGE.KEY_CART);
		dispatch(getCartSuccessAction([]));

		setTimeout(() => {
			navigate("/success", { state: "Success" });
			setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) return <CoreLoading />;

	return (
		<Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
			<Box flex flexDirection="column" justifyContent="space-between" className="min-w-[120px] flex-none">
				<Text className="text-gray" size="xSmall">
					{cart.totalQuantity} sản phẩm
				</Text>
				<Text.Title size="large">
					<DisplayPrice>{cart.totalPrice}</DisplayPrice>
				</Text.Title>
			</Box>

			<Button type="highlight" fullWidth onClick={handleSuccess} disabled={cart?.cart?.length > 0 ? false : true}>
				Đặt hàng
			</Button>
		</Box>
	);
};
