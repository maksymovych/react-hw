import { combineReducers } from "redux";
import { commentReducer } from "./comments";
import { postReducer } from "./posts";

export const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});
