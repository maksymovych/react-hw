import { combineReducers } from "redux";
import { cardsReducer as cards } from "./cards";
import { registrationReducer as registration } from "./registration";
import { competitionReducer as competitions } from "./competitions";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    cards,
    registration,
    competitions,
    router: connectRouter(history),
  });

export default rootReducer(history);
