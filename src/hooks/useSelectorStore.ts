//* LIB
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useStores = () => {
	const state = useSelector((state: RootState) => state.stores);

	return state;
};

export default useStores;
