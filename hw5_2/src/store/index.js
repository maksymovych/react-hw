import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { history } from "../reducers";

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? "#ed1539" : "#15e2ed"),
    prevState: () => "#1c28d4",
    action: () => "#69b851",
    nextState: () => "#e6bf40",
    error: () => "#b5181b",
  },
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history)))
);
