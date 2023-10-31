//* LIB
import { combineReducers } from "redux";

//* IMPORT
import BannerReducer from "./banner/Reducer";
import todoReducer from "./placeholder/PlaceholderReducer";

const rootReducer = combineReducers({
	todos: todoReducer,
	banners: BannerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
