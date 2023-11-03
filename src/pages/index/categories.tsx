// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */

import { CategoryItemSkeleton } from "components/skeletons";
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

	const { categories, isLoading } = useStoreCategories();

	useEffect(() => {
		dispatch(getCategoriesInitiate());
	}, []);

	const navigate = useNavigate();
	const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

	const gotoCategory = (categoryId: string) => {
		setSelectedCategoryId(categoryId);
		navigate("/category");
	};
	const checkLengthCategory = Array.isArray(categories) && categories.length > 0 ? categories.length : 6;

	return (
		<div className="grid grid-cols-4 items-center">
			{isLoading ? (
				<div style={{ width: "100%", gridColumn: "span 4" }}>
					<CategoryItemSkeleton numImages={Number(checkLengthCategory)} />
				</div>
			) : (
				Array.isArray(categories) &&
				categories.map((category, i) => (
					<div key={i} onClick={() => gotoCategory(category.fields.id)} className="w-full">
						<div className="flex flex-col space-x-2 items-center rounded-full">
							<img className="w-12 h-12 rounded-full" src={category.fields.icon} />
							<Text size="xxSmall" className="text-gray">
								{category.fields.name}
							</Text>
						</div>
					</div>
				))
			)}
		</div>
	);
};
