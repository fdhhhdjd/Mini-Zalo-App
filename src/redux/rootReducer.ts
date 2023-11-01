//* LIB
import { combineReducers } from "redux";

//* IMPORT
import BannerReducer from "./banner/Reducer";
import NotifyReducer from "./notification/Reducer";
import StoreReducer from "./store/Reducer";

const rootReducer = combineReducers({
	banners: BannerReducer,
	stores: StoreReducer,
	notify: NotifyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
