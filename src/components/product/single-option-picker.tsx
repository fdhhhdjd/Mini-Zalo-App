import React, { FC } from "react";
import { ProductVariants } from "types/product";
import { Box, Radio, Text } from "zmp-ui";

export const SingleOptionPicker: FC<{
	variant: ProductVariants;
	value: string;
	onChange: (value: string) => void;
}> = ({ variant, value, onChange }) => {
	return (
		<Box my={8} className="space-y-2">
			<Text.Title size="small">{variant.label}</Text.Title>
			<Radio.Group
				className="flex-1 grid grid-cols-3 justify-between"
				name={variant.key}
				options={variant.options?.map((option) => ({
					value: option.key,
					label: option.label
				}))}
				value={value}
				onChange={(selectedOption: string) => {
					onChange(selectedOption);
				}}
			/>
		</Box>
	);
};
