import { ProductItem } from "components/product/item";
import useGetProducts from "hooks/useGetProductCategory";
import useStoreCategories from "hooks/useSelectorCategories";
import React, { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRecoilValue } from "recoil";
import { getCategoriesInitiate } from "redux/category/Actions";
import { selectedCategoryIdState } from "state";
import { CategoriesItem } from "types/category";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";

export const CategoryPicker: FC = () => {
	const dispatch = useDispatch();
	const { categories } = useStoreCategories() as { categories: CategoriesItem[] };

	useEffect(() => {
		dispatch(getCategoriesInitiate());
	}, []);
	// const categories = useRecoilValue(categoriesState);
	const selectedCategory = useRecoilValue(selectedCategoryIdState);
	return (
		<Tabs scrollable defaultActiveKey={selectedCategory} className="category-tabs">
			{categories?.map((item, index: number) => (
				<Tabs.Tab key={index} label={item.fields.name}>
					<Suspense>
						<CategoryProducts categoryId={item.id} />
					</Suspense>
				</Tabs.Tab>
			))}
		</Tabs>
	);
};
const CategoryProducts: FC<{ categoryId: string }> = ({ categoryId }: { categoryId: string }) => {
	const { allProducts } = useGetProducts();

	const filteredProducts = allProducts.filter((product) => {
		return product.fields.category_id.includes(categoryId);
	});

	if (!filteredProducts) {
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
			{filteredProducts.map((product) => (
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
