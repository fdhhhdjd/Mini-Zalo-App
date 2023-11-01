//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { NotifyItem, ResponseNotifyData } from "types/Notify";

import { TYPES } from "./Types";

//* Started pending thunk
const getDataNotifyPending = () => {
	return {
		type: TYPES.GET_NOTIFICATION_PENDING
	} as const;
};

//* Get data for thunk
const getDataNotifySuccess = (data: NotifyItem) => {
	return {
		type: TYPES.GET_NOTIFICATION_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataNotifyError = (error: Error) => {
	return {
		type: TYPES.GET_NOTIFICATION_ERROR,
		payload: error
	} as const;
};

// Action thunk Get data for Store
export const getNotifyInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: NotifyItem | Error }) => void) => {
		try {
			dispatch(getDataNotifyPending());

			const response: ResponseNotifyData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.NOTIFY}`
			);

			dispatch(getDataNotifySuccess(response.data.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataNotifyError(error));
			}
		}
	};
};
