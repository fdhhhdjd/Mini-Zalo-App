import { ProductItem } from "components/product/item";
import { Section } from "components/section";
import { ProductItemSkeleton } from "components/skeletons";
import useStoreProduct from "hooks/useSelectorProduct";
import React, { FC, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getProductInitiate } from "redux/product/Action";
import { Box } from "zmp-ui";

export const ProductListContent: FC = () => {
	const { products } = useStoreProduct();

	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getProductInitiate());
	}, []);

	return (
		<Section title="Danh sách sản phẩm">
			<Box className="grid grid-cols-2 gap-4">
				{Array.isArray(products) &&
					products.map((product) => <ProductItem key={product.id} product={product} />)}
			</Box>
		</Section>
	);
};

export const ProductListFallback: FC = () => {
	const products = [...new Array(12)];

	return (
		<Section title="Danh sách sản phẩm">
			<Box className="grid grid-cols-2 gap-4">
				{products.map((_, i) => (
					<ProductItemSkeleton key={i} />
				))}
			</Box>
		</Section>
	);
};

export const ProductList: FC = () => {
	return (
		<Suspense fallback={<ProductListFallback />}>
			<ProductListContent />
		</Suspense>
	);
};
