import React, { FC, useCallback, useEffect, useState } from "react";
import { Box, Input } from "zmp-ui";
import useSearchProducts from "hooks/useSearchProducts";
export const Inquiry: FC = () => {
	const { debouncedSearch, keySearch } = useSearchProducts();
	const handleChange = useCallback(
		(key: string) => {
			debouncedSearch(key);
		},
		[keySearch]
	);
	return (
		<Box
			p={4}
			pt={6}
			className="bg-white transition-all ease-out flex-none"
			ref={
				((el: HTMLDivElement) => {
					setTimeout(() => {
						if (el) {
							el.style.paddingTop = "8px";
						}
					});
				}) as any
			}
		>
			<Input.Search
				ref={(el) => {
					if (!el?.input?.value) {
						el?.focus();
					}
				}}
				defaultValue={keySearch}
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Tìm nhanh đồ uống, món mới ..."
				clearable
				allowClear
			/>
		</Box>
	);
};
