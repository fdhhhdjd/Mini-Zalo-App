// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "state";
import { Box, Text } from "zmp-ui";

export const Categories: FC = () => {
	const categories = useRecoilValue(categoriesState);
	const navigate = useNavigate();
	const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

	const gotoCategory = (categoryId: string) => {
		setSelectedCategoryId(categoryId);
		navigate("/category");
	};

	return (
		<Box className="bg-white grid grid-cols-4 gap-4 p-4">
			{categories.map((category, i) => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div key={i} onClick={() => gotoCategory(category.id)} className="flex flex-col space-y-2 items-center">
					<img className="w-12 h-12" src={category.icon} />
					<Text size="xxSmall" className="text-gray">
						{category.name}
					</Text>
				</div>
			))}
		</Box>
	);
};
