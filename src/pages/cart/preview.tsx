import { DisplayPrice } from "components/display/price";
import useSelectorCart from "hooks/useSelectorCart";
import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Text } from "zmp-ui";

export const CartPreview: FC = () => {
	const cart = useSelectorCart();
	const navigate = useNavigate();

	const handleSuccess = useCallback(() => {
		navigate("/success");
	}, [navigate]);

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
			<Button type="highlight" fullWidth onClick={handleSuccess}>
				Đặt hàng
			</Button>
		</Box>
	);
};
