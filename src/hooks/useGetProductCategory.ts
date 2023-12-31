import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/rootReducer";
import { ProductItems } from "types/product";

import useStoreProduct from "./useSelectorProduct";

const useGetProducts = () => {
	const { products } = useStoreProduct();

	const [allProducts, setAllProducts] = useState<ProductItems[]>([]);

	useEffect(() => {
		setAllProducts(products);
	}, [products]);

	return { allProducts };
};

export default useGetProducts;

export const useGetProductCategory = () => {
	const state = useSelector((state: RootState) => state.product);

	return state;
};
