//* LIB
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useNotify = () => {
	const state = useSelector((state: RootState) => state.notify);

	return state;
};

export default useNotify;
