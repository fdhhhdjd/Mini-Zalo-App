import React, { FC, useMemo } from "react";
import { Option, ProductField } from "types/product";

import { DisplayPrice } from "./price";

export const DisplayPriceChange: FC<{ children: ProductField; option: Option }> = ({ children, option }) => {
	const percent = option.priceChange?.percent ?? 0;
	const changes = useMemo(
		() =>
			option.priceChange
				? option.priceChange.type === "fixed"
					? option.priceChange.amount
					: children.price * percent
				: 0,
		[children, option]
	);
	return (
		<>
			{changes ? changes > 0 && "+" : ""}
			<DisplayPrice>{changes}</DisplayPrice>
		</>
	);
};
