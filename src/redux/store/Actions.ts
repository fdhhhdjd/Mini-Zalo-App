//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { ResponseStoreData, StoreItem } from "types/store";

import { TYPES } from "./Types";

//* Started pending thunk
const getDataStorePending = () => {
	return {
		type: TYPES.GET_STORE_PENDING
	} as const;
};

//* Get data for thunk
const getDataStoreSuccess = (data: StoreItem) => {
	return {
		type: TYPES.GET_STORE_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataStoreError = (error: Error) => {
	return {
		type: TYPES.GET_STORE_ERROR,
		payload: error
	} as const;
};

// Action thunk Get data for Store
export const getPlaceholderInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: StoreItem | Error }) => void) => {
		try {
			dispatch(getDataStorePending());

			const response: ResponseStoreData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.STORE}`
			);

			dispatch(getDataStoreSuccess(response.data.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataStoreError(error));
			}
		}
	};
};
