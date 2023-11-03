//* IMPORT

import { CategoriesAction, InitialInterface } from "types/category";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	categories: [],
	error: null
} as InitialInterface;

const CategoriesReducer = (state: InitialInterface = initialState, action: CategoriesAction<string[]>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_CATEGORY_PENDING:
			return {
				...state,
				isLoading: true
			};

		// Todo: 2. Success
		case TYPES.GET_CATEGORY_SUCCESS:
			return {
				...state,
				categories: payload,
				isLoading: false
			};
		// Todo: 3. Error
		case TYPES.GET_CATEGORY_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false
			};
		default:
			return {
				...state
			};
	}
};
export default CategoriesReducer;
