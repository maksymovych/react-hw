import {
  COMPETITION_FINISHED,
  FETCHING_FINISHED,
  FETCHING_START,
  FETCH_COMPETITIONS_ERROR,
  FETCH_COMPETITIONS_SUCCESS,
  SEARCH_COMPETITION,
} from "../actions";

export const initialState = {
  isFetching: false,
  isError: false,
  competitions: [],
  _competitions: [],
};

export function competitionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPETITIONS_SUCCESS:
      return {
        ...state,
        competitions: [...action.payload],
        _competitions: [...action.payload],
      };
    case FETCH_COMPETITIONS_ERROR:
      return {
        ...state,
        isError: true,
      };
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_FINISHED:
      return {
        ...state,
        isFetching: false,
      };
    case SEARCH_COMPETITION:
      if (!action.payload) {
        return {
          ...state,
          competitions: [...state._competitions],
        };
      }
      return {
        ...state,
        competitions: [...state._competitions].filter(({ name }) =>
          name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case COMPETITION_FINISHED:
      const games = state._competitions;
      const index = games.findIndex(
        (item) => item.competitionId === action.payload
      );
      const result = [
        ...games.slice(0, index),
        {
          ...games[index],
          status: "finished",
        },
        ...games.slice(index + 1),
      ];

      return {
        ...state,
        _competitions: [...result],
        competitions: [...result],
      };

    default:
      return state;
  }
}
