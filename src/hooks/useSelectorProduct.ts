//* LIB
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useStoreProduct = () => {
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const state = useSelector((state: RootState) => state.product);

	return state;
};

export default useStoreProduct;
