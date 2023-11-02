// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */

import useStoreCategories from "hooks/useSelectorCategories";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { getCategoriesInitiate } from "redux/category/Actions";
import { selectedCategoryIdState } from "state";
import { Box, Text } from "zmp-ui";

export const CategoriesDev: FC = () => {
	const dispatch = useDispatch();

	const { categories } = useStoreCategories();

	useEffect(() => {
		dispatch(getCategoriesInitiate());
	}, []);

	const navigate = useNavigate();
	const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

	const gotoCategory = (categoryId: string) => {
		setSelectedCategoryId(categoryId);
		navigate("/category");
	};

	return (
		<Box className="bg-white grid grid-cols-4 gap-4 p-4">
			{categories &&
				categories.map((category, i) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
					<div
						key={i}
						onClick={() => gotoCategory(category.fields.id)}
						className="flex flex-col space-y-2 items-center"
					>
						<img className="w-12 h-12" src={category.fields.icon} />
						<Text size="xxSmall" className="text-gray">
							{category.fields.name}
						</Text>
					</div>
				))}
		</Box>
	);
};
