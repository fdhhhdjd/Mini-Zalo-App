//* LIB
import { combineReducers } from "redux";

//* IMPORT
import BannerReducer from "./banner/Reducer";
import CartReducer from "./cart/Reducer";
import NotifyReducer from "./notification/Reducer";
import ProductReducer from "./product/ProductReducer";
import ResultProductReducer from "./search/Reducer";
import StoreReducer from "./store/Reducer";
const rootReducer = combineReducers({
	banners: BannerReducer,
	stores: StoreReducer,
	product: ProductReducer,
	searchProducts: ResultProductReducer,
	notify: NotifyReducer,
	cart: CartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
