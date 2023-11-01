//* IMPORT
import { LOCATION } from "common/constants";
import { InitialInterface, StoreAction, StoreItem } from "types/store";
import { calculateDistance } from "utils/location";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	store: [],
	error: null
} as InitialInterface;

const TodoReducer = (state: InitialInterface = initialState, action: StoreAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_STORE_PENDING:
			return {
				...state,
				isLoading: true
			};

		// Todo: 2. Success
		case TYPES.GET_STORE_SUCCESS:
			const storesWithDistance = payload?.map((item: StoreItem) => {
				const { lat, long, ...fields } = item.fields;

				if (lat && long) {
					const distance = calculateDistance(LOCATION.LATITUDE, LOCATION.LONGITUDE, lat, long);
					return {
						...item,
						fields: {
							...fields,
							distance: distance
						}
					};
				}
				return item;
			});

			return {
				...state,
				store: storesWithDistance,
				isLoading: false
			};
		// Todo: 3. Error
		case TYPES.GET_STORE_ERROR:
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
export default TodoReducer;
