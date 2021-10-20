export const FINDE_MATCHES = "[search] finde matches";
export const FETCH_CARDS_SUCCESS = "[cards] fetch cards success";

export const findeMatches = (word) => ({
  type: FINDE_MATCHES,
  payload: word,
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards,
});
