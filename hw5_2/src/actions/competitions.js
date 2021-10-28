export const FETCH_COMPETITIONS_SUCCESS =
  "[competitions] fetch competitions success";
export const FETCH_COMPETITIONS_ERROR =
  "[competitions] fetch competitions error";
export const FETCHING_FINISHED = "[fetching] finished fetching";
export const FETCHING_START = "[fetching] start fetching";
export const SEARCH_COMPETITION = "[search] finde matches";
export const COMPETITION_FINISHED = "[competition] finished";

export const fetchCompetitionsSuccess = (data) => ({
  type: FETCH_COMPETITIONS_SUCCESS,
  payload: data,
});
export const fetchCompetitionsError = (error) => ({
  type: FETCH_COMPETITIONS_SUCCESS,
  payload: error,
});

export const fetchingStart = () => ({
  type: FETCHING_START,
});

export const fetchingFinished = () => ({
  type: FETCHING_FINISHED,
});

export const searchCompetition = (data) => ({
  type: SEARCH_COMPETITION,
  payload: data,
});

export const competitionFinished = (id) => ({
  type: COMPETITION_FINISHED,
  payload: id,
});
