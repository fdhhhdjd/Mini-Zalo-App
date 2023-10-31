//* IMPORT
import { TodoAction, InitialInterface } from "types/Placeholder";

import { TYPES } from "./PlaceholderTypes";

const initialState = {
	loading: false,
	todos: [],
	error: null
} as InitialInterface;

const TodoReducer = (state: InitialInterface = initialState, action: TodoAction<undefined | string[] | Error>) => {
	const { type, payload } = action;
	switch (type) {
		// Todo:  1. Pending
		case TYPES.GET_PLACEHOLDER_PENDING:
			return {
				...state,
				loading: true
			};

		// Todo: 2. Success
		case TYPES.GET_PLACEHOLDER_SUCCESS:
			return {
				...state,
				todos: payload
			};
		// Todo: 3. Error
		case TYPES.GET_PLACEHOLDER_ERROR:
			return {
				...state,
				loading: false,
				error: payload
			};
		default:
			return {
				...state
			};
	}
};
export default TodoReducer;
