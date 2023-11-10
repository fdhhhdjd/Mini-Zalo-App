import { PaymentMethodSkeleton } from "components/skeletons";
import usePaymentMethod from "hooks/useSelectorPaymentMethod";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPaymentMethodInitiate } from "redux/payment-method/Actions";
import { Box, Radio, Text } from "zmp-ui";

export const Transfer = () => {
	const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);
	const dispatch = useDispatch();

	const { paymentMethod, isLoading } = usePaymentMethod();

	const handleRadioChange = (selectedValue: number) => {
		setSelectedOption(selectedValue);
	};

	useEffect(() => {
		dispatch(getPaymentMethodInitiate());
	}, []);

	return (
		<Box className="space-y-3 px-4">
			<Text.Header>Phương thức thanh toán</Text.Header>
			<Box className="bg-background rounded-xl space-y-8">
				<Box className="space-y-8 p-4">
					{isLoading ? (
						<PaymentMethodSkeleton numberMethod={3} />
					) : (
						<>
							{paymentMethod?.map((item, index) => (
								<Box key={index} className="space-y-2">
									<Box className="flex flex-row items-center justify-between">
										<Box key={index} className="flex flex-row items-center space-x-2">
											<img src={item.fields.image} className="w-8 h-8 p-1" alt="zalo_pay" />
											<Text>{item.fields.title}</Text>
										</Box>
										<Radio
											name="paymentOption"
											size="medium"
											value={item.fields.value}
											checked={selectedOption === item.fields.value}
											onChange={() => handleRadioChange(item.fields.value)}
										/>
									</Box>

									{selectedOption === 2 && index === 1 && (
										<Box className="space-y-5">
											<Text className="text-xs">Số tài khoản: 1234567891011121314</Text>
											<Text className="text-xs">Tên tài khoản: Demo mini App</Text>
											<Text className="text-xs">Nội dung: Số điện thoại của bạn</Text>
											<Text className="text-xs">Ngân hàng: ABCXYZ</Text>
										</Box>
									)}
									<Box className="flex-1 min-w-0 relative">
										{index !== paymentMethod.length - 1 && (
											<hr className="absolute left-0 -right-4 -bottom-4 border-divider border-t-[0.5px]"></hr>
										)}
									</Box>
								</Box>
							))}
						</>
					)}
				</Box>
			</Box>
		</Box>
	);
};
