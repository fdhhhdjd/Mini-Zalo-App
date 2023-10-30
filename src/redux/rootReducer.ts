//* LIB
import { combineReducers } from "redux";

//* IMPORT
import todoReducer from "./placeholder/PlaceholderReducer";

export type RootState = ReturnType<typeof todoReducer>;

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
