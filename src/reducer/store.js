import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist"; //for maintaining the data in local storage using persist store.

const middlewares = [thunk];

//it stores the data only in development.
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
