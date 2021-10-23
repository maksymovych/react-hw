import { FINDE_MATCHES } from "../actions/cards";
import {
  FETCH_CARDS_SUCCESS,
  REMOVE_CARD,
  SAVE_NEW_PARTICIPANT,
} from "../actions";

const initialState = {
  cards: [],
  _cards: [],
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FINDE_MATCHES:
      if (!action.payload) {
        return {
          ...state,
          cards: [...state._cards],
        };
      }
      const string = action.payload.toLowerCase();
      const filteredCards = state._cards.filter(
        ({ id, firstName, lastName }) =>
          id.toLowerCase().includes(string) ||
          firstName.toLowerCase().includes(string) ||
          lastName.toLowerCase().includes(string)
      );
      return {
        ...state,
        cards: [...filteredCards],
      };
    case FETCH_CARDS_SUCCESS:
      return {
        cards: [...state.cards, ...action.payload],
        _cards: [...state.cards, ...action.payload],
      };
    case REMOVE_CARD:
      const newList = state._cards.filter((card) => card.id !== action.payload);
      return {
        cards: [...newList],
        _cards: [...newList],
      };
    case SAVE_NEW_PARTICIPANT:
      console.log(action.payload);
      return {
        cards: [...state.cards, { ...action.payload }],
        _cards: [...state._cards, { ...action.payload }],
      };
    default:
      return state;
  }
}
