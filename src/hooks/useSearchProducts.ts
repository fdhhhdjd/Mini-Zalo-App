//* LIB
// eslint-disable-next-line import/order
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line import/order
import { useSelector, useDispatch } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";
import { getProductSearchKey } from "redux/search/Actions";
import { ProductItem, InitialProdInterface } from "types/product";
const useSearchProducts = () => {
	const dispatch = useDispatch();

	const [keySearch, setKeySearch] = useState("");
	const state = useSelector((state: RootState) => state.product);
	const { products } = state as InitialProdInterface;
	const [isMounted, setIsMounted] = useState(false);
	const filteredProducts = useMemo(() => {
		if (isMounted && keySearch) {
			return products.filter((product) => {
				const nameProduct =
					product.fields.name.toLocaleLowerCase() + product.fields.description.toLocaleLowerCase();
				return nameProduct.includes(keySearch.toLocaleLowerCase());
			}) as ProductItem[];
		} else {
			return [];
		}
	}, [keySearch, products, isMounted]);

	const debouncedSearch = useMemo(
		() =>
			debounce((searchKey) => {
				setKeySearch(searchKey);
			}, 500),
		[]
	);

	useEffect(() => {
		if (!isMounted) {
			return setIsMounted(true);
		}

		dispatch(getProductSearchKey(filteredProducts));
	}, [keySearch]);

	return {
		keySearch,
		debouncedSearch
	};
};

export default useSearchProducts;

export const useSelectSearch = () => {
	const state = useSelector((state: RootState) => state.searchProducts);

	return state;
};
