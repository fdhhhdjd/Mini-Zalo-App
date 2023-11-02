//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { CategoriesItem, ResponseCategoriesData } from "types/category";

import { TYPES } from "./Types";

//* Started pending thunk
const getDataCategoriesPending = () => {
	return {
		type: TYPES.GET_CATEGORY_PENDING
	} as const;
};

//* Get data for thunk
const getDataCategoriesSuccess = (data: CategoriesItem) => {
	return {
		type: TYPES.GET_CATEGORY_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataCategoriesError = (error: Error) => {
	return {
		type: TYPES.GET_CATEGORY_ERROR,
		payload: error
	} as const;
};

// Action thunk Get dagetDataCategoriesholder
export const getCategoriesInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: CategoriesItem | Error }) => void) => {
		try {
			dispatch(getDataCategoriesPending());

			const response: ResponseCategoriesData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.CATEGORIES}`
			);

			dispatch(getDataCategoriesSuccess(response.data.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataCategoriesError(error));
			}
		}
	};
};
