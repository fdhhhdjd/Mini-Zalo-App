//* IMPORT

import { CategoriesAction, InitialInterface } from "types/category";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	categories: [],
	error: null
} as InitialInterface;

const CategoriesReducer = (
	state: InitialInterface = initialState,
	action: CategoriesAction<undefined | string[] | Error>
) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_CATEGORY_PENDING:
			return {
				...state,
				loading: true
			};

		// Todo: 2. Success
		case TYPES.GET_CATEGORY_SUCCESS:
			return {
				...state,
				categories: payload,
				loading: false
			};
		// Todo: 3. Error
		case TYPES.GET_CATEGORY_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return {
				...state
			};
	}
};
export default CategoriesReducer;