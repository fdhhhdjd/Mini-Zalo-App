//* IMPORT
import { InitialInterface, NotifyAction } from "types/Notify";

import { TYPES } from "./Types";

const initialState = {
	isLoading: false,
	notify: [],
	error: null
} as InitialInterface;

const TodoReducer = (state: InitialInterface = initialState, action: NotifyAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_NOTIFICATION_PENDING:
			return {
				...state,
				isLoading: true
			};

		// Todo: 2. Success
		case TYPES.GET_NOTIFICATION_SUCCESS:
			return {
				...state,
				notify: payload,
				isLoading: false
			};
		// Todo: 3. Error notify
		case TYPES.GET_NOTIFICATION_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		// Todo: 4. Error unmount
		case TYPES.SET_NOTIFICATION_UNMOUNT:
			return {
				isLoading: false,
				notify: [],
				error: null
			};
		default:
			return {
				...state
			};
	}
};
export default TodoReducer;
