// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

import { RootState } from "redux/rootReducer";

const useSelectorCart = () => {
	const state = useSelector((state: RootState) => state.cart);
	return state;
};

export default useSelectorCart;
