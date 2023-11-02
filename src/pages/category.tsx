import { ProductItem } from "components/product/item";
import useStoreCategories from "hooks/useSelectorCategories";
import React, { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRecoilValue } from "recoil";
import { getCategoriesInitiate } from "redux/category/Actions";
import { productsByCategoryState, selectedCategoryIdState } from "state";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";

export const CategoryPicker: FC = () => {
	const dispatch = useDispatch();
	const { categories } = useStoreCategories();
	useEffect(() => {
		dispatch(getCategoriesInitiate());
	}, []);
	// const categories = useRecoilValue(categoriesState);
	const selectedCategory = useRecoilValue(selectedCategoryIdState);
	return (
		<Tabs scrollable defaultActiveKey={selectedCategory} className="category-tabs">
			{categories &&
				categories.map((category, id) => (
					<Tabs.Tab key={id} label={category.fields.name}>
						<Suspense>
							<CategoryProducts CategoryId={category.id} />
						</Suspense>
					</Tabs.Tab>
				))}
		</Tabs>
	);
};

const CategoryProducts: FC<{ CategoryId: string }> = ({ CategoryId }) => {
	const productsByCategory = useRecoilValue(productsByCategoryState(CategoryId));
	if (productsByCategory.length === 0) {
		return (
			<Box className="flex-1 bg-background p-4 flex justify-center items-center">
				<Text size="xSmall" className="text-gray">
					Không có sản phẩm trong danh mục
				</Text>
			</Box>
		);
	}
	return (
		<Box className="bg-background grid grid-cols-2 gap-4 p-4">
			{productsByCategory.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</Box>
	);
};

const CategoryPage: FC = () => {
	return (
		<Page className="flex flex-col">
			<Header title="Danh mục" />
			<CategoryPicker />
		</Page>
	);
};

export default CategoryPage;
