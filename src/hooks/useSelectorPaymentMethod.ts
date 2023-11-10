//* LIB
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const usePaymentMethod = () => {
	const state = useSelector((state: RootState) => state.payment_method);

	return state;
};

export default usePaymentMethod;
