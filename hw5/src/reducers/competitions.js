import {
  FETCHING_FINISHED,
  FETCHING_START,
  FETCH_COMPETITIONS_ERROR,
  FETCH_COMPETITIONS_SUCCESS,
} from "../actions";

export const initialState = {
  isFetching: false,
  isError: false,
  competitions: [],
};

export function competitionsReduser(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPETITIONS_SUCCESS:
      return {
        ...state,
        competitions: [...action.payload],
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

    default:
      return state;
  }
}
