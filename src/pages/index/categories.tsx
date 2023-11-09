// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */

import { CategoryItemSkeleton } from "components/skeletons";
import useStoreCategories from "hooks/useSelectorCategories";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { getCategoriesInitiate, setDataCategoriesUnmount } from "redux/category/Actions";
import { selectedCategoryIdState } from "state";
import { Text } from "zmp-ui";

export const CategoriesDev: FC = () => {
	const dispatch = useDispatch();

	const { categories, isLoading } = useStoreCategories();

	useEffect(() => {
		dispatch(getCategoriesInitiate());
		return () => {
			dispatch(setDataCategoriesUnmount());
		};
	}, []);

	const navigate = useNavigate();
	const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

	const gotoCategory = (categoryId: string) => {
		setSelectedCategoryId(categoryId);

		navigate("/category", {
			state: {
				categoryId
			}
		});
	};
	const checkLengthCategory = Array.isArray(categories) && categories.length > 0 ? categories.length : 6;

	return (
		<div className="grid grid-cols-4 items-center">
			{isLoading ? (
				<CategoryItemSkeleton numImages={Number(checkLengthCategory)} />
			) : (
				Array.isArray(categories) &&
				categories.map((category, i) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
					<div key={i} onClick={() => gotoCategory(category?.id)} className="w-full">
						<div className="flex flex-col items-center rounded-full">
							<img className="w-12 h-12 rounded-full" src={category.fields.icon} />
							<Text size="xxSmall" className="text-gray mt-1 mb-1">
								{category.fields.name}
							</Text>
						</div>
					</div>
				))
			)}
		</div>
	);
};
