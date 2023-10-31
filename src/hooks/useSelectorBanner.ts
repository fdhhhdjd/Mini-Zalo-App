//* LIB
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useStoreBanner = () => {
	const state = useSelector((state: RootState) => state.banners);

	return state;
};

export default useStoreBanner;
