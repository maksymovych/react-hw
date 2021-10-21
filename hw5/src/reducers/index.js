import { combineReducers } from "redux";
import { cardsReducer as cards } from "./cards";

export const rootReducer = combineReducers({
  cards,
});
