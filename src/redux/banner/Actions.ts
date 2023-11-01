//* IMPORT
import { BASE_ID, TABLE } from "common/constants";
import { HttpClient } from "services";
import { BannerItem, ResponseBannerData } from "types/banner";

import { TYPES } from "./Types";

//* Started pending thunk
const getDataBannerPending = () => {
	return {
		type: TYPES.GET_BANNER_PENDING
	} as const;
};

//* Get data for thunk
const getDataBannerSuccess = (data: BannerItem) => {
	return {
		type: TYPES.GET_BANNER_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataBannerError = (error: Error) => {
	return {
		type: TYPES.GET_BANNER_ERROR,
		payload: error
	} as const;
};

// Action thunk Get data for Banner
export const getBannerInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: BannerItem | Error }) => void) => {
		try {
			dispatch(getDataBannerPending());

			const response: ResponseBannerData = await HttpClient.getMethod(
				`${process.env.API_SERVER}/${BASE_ID}/${TABLE.BANNER}`
			);

			dispatch(getDataBannerSuccess(response.data.records));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataBannerError(error));
			}
		}
	};
};
