// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import { DisplayPrice } from "components/display/price";
import React, { FC } from "react";
import { ProductItems } from "types/product";
import { Box, Text } from "zmp-ui";

import { ProductPicker } from "./picker";

export const ProductItem: FC<{ product: ProductItems }> = ({ product }) => {
	return (
		<ProductPicker product={product}>
			{({ open }) => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div className="space-y-2" onClick={open}>
					<Box className="w-full aspect-square relative">
						<img
							loading="lazy"
							src={product.fields.image}
							className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
						/>
					</Box>
					<Text className="whitespace-nowrap truncate">{product.fields.name}</Text>
					<Text size="xxSmall" className="text-primary pb-2">
						<DisplayPrice>{product.fields.price}</DisplayPrice>
					</Text>
				</div>
			)}
		</ProductPicker>
	);
};
