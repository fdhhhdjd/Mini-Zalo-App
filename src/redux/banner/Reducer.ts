//* IMPORT
import { BannerAction, InitialInterface } from "types/banner";

import { TYPES } from "./Types";

const initialState: InitialInterface = {
	isLoading: false,
	banners: [],
	error: null
};

const BannerReducer = (state: InitialInterface = initialState, action: BannerAction<undefined | string[] | Error>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_BANNER_PENDING:
			return {
				...state,
				isLoading: true
			};

		// Todo: 2. Success
		case TYPES.GET_BANNER_SUCCESS:
			return {
				...state,
				banners: payload,
				isLoading: false
			};
		// Todo: 3. Error
		case TYPES.GET_BANNER_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false
			};
		// Todo: 4. unmount
		case TYPES.SET_BANNER_UNMOUNT:
			return {
				isLoading: false,
				banners: [],
				error: null
			};
		default:
			return {
				...state
			};
	}
};
export default BannerReducer;
