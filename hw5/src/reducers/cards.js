import { FINDE_MATCHES } from "../actions/cards";
import { FETCH_CARDS_SUCCESS, GET_CARDS_SUCCESS } from "../actions";

const initialState = {
  searchInput: "",
  cards: [],
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FINDE_MATCHES:
      const filteredCards = state.cards.filter(
        (item) =>
          item.firstName.includes(action.payload) ||
          item.latsName.includes(action.payload)
      );
      return {
        ...state,
        ...(state.cards = filteredCards),
      };
    case FETCH_CARDS_SUCCESS:
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        ...(state.cards[state.cards.length] = action.payload),
      };
    default:
      return state;
  }
}
