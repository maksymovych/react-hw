import { FINDE_MATCHES } from "../actions/cards";
import { FETCH_CARDS_SUCCESS, GET_CARDS_SUCCESS } from "../actions";

const initialState = {
  searchInput: "",
  cards: [],
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FINDE_MATCHES:
      if (!action.payload) {
        return state;
      }
      const string = action.payload.toLowerCase();
      const filteredCards = state.cards.filter(
        ({ id, firstName, lastName }) =>
          id.toLowerCase().includes(string) ||
          firstName.toLowerCase().includes(string) ||
          lastName.toLowerCase().includes(string)
      );
      return {
        ...state,
        ...(state.cards = filteredCards),
      };
    case FETCH_CARDS_SUCCESS:
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: [
          ...state.cards,
          ...action.payload
        ]
      };
    default:
      return state;
  }
}
