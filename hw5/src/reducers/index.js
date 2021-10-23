import { combineReducers } from "redux";
import { cardsReducer as cards } from "./cards";
import { registrationReducer as registration } from "./registration";

export const rootReducer = combineReducers({
  cards,
  registration,
});
