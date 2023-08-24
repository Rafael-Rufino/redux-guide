import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;

// Primero metado sem usar a ferramenta  @reduxjs/toolkit
/*import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;*/
