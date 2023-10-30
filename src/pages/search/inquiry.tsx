import React, { FC, useCallback } from "react";
import { useRecoilState } from "recoil";
import { keywordState } from "state";
import { Box, Input } from "zmp-ui";

export const Inquiry: FC = () => {
	const [keyword, setKeyword] = useRecoilState(keywordState);

	const handleChange = useCallback(
		(key: string) => {
			setKeyword(key);
		},
		[setKeyword]
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
				defaultValue={keyword}
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Tìm nhanh đồ uống, món mới ..."
				clearable
				allowClear
			/>
		</Box>
	);
};
