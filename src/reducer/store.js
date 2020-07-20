import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
