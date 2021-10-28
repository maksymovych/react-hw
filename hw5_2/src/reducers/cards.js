import { FINDE_MATCHES } from "../actions/cards";
import {
  GET_WINER,
  FETCH_CARDS_SUCCESS,
  REMOVE_CARD,
  SAVE_NEW_PARTICIPANT,
  CHANGE_NAME_COMPETITION,
  CHANGE_CURRENT_STATUS,
} from "../actions";
import { getWinnerUtils } from "../utils/getWinnerUtils";

const initialState = {
  cards: [],
  _cards: [],
  theWinner: {},
  competitionName: "",
  status: "",
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
        ...state,
        cards: [...state.cards, ...action.payload],
        _cards: [...state.cards, ...action.payload],
      };
    case REMOVE_CARD:
      const newList = state._cards.filter((card) => card.id !== action.payload);
      return {
        ...state,
        cards: [...newList],
        _cards: [...newList],
      };
    case SAVE_NEW_PARTICIPANT:
      return {
        ...state,
        cards: [...state.cards, { ...action.payload }],
        _cards: [...state._cards, { ...action.payload }],
      };
    case GET_WINER:
      return {
        ...state,
        theWinner: getWinnerUtils(state._cards),
      };
    case CHANGE_NAME_COMPETITION:
      return {
        ...state,
        competitionName: action.payload,
      };
    case CHANGE_CURRENT_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
