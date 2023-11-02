// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useStoreCategories = () => {
	const state = useSelector((state: RootState) => state.categories);

	return state;
};

export default useStoreCategories;
