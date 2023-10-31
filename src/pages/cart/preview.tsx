import { DisplayPrice } from "components/display/price";
import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { totalPriceState, totalQuantityState } from "state";
import { Box, Button, Text } from "zmp-ui";

export const CartPreview: FC = () => {
	const quantity = useRecoilValue(totalQuantityState);
	const totalPrice = useRecoilValue(totalPriceState);
	const navigate = useNavigate();

	const handleSuccess = useCallback(() => {
		// pay(totalPrice)
		navigate("/success");
	}, [navigate]);

	return (
		<Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
			<Box flex flexDirection="column" justifyContent="space-between" className="min-w-[120px] flex-none">
				<Text className="text-gray" size="xSmall">
					{quantity} sản phẩm
				</Text>
				<Text.Title size="large">
					<DisplayPrice>{totalPrice}</DisplayPrice>
				</Text.Title>
			</Box>
			<Button type="highlight" fullWidth onClick={handleSuccess}>
				Đặt hàng
			</Button>
		</Box>
	);
};
