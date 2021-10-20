import { FINDE_MATCHES } from "../actions/cards";
import { FETCH_CARDS_SUCCESS } from "../actions";

const initialState = {};

export function cards(state = initialState, action) {
  switch (action.type) {
    case FINDE_MATCHES:
      return {};
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
