//* LIB
import { APP_NODE } from "common/constants";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

//* IMPORT
import rootReducer from "./rootReducer";

const middleware = [thunk];

if (process.env.NODE_APP === APP_NODE.DEV) {
	middleware.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
