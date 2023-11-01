//* LIB
import { combineReducers } from "redux";

//* IMPORT
import BannerReducer from "./banner/Reducer";
import StoreReducer from "./store/Reducer";

const rootReducer = combineReducers({
	banners: BannerReducer,
	stores: StoreReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
