export const FINDE_MATCHES = "[search] finde matches";
export const FETCH_CARDS_SUCCESS = "[cards] fetch cards success";
export const GET_CARDS = "[cards] get cards";
export const GET_CARDS_SUCCESS = "[cards] get cards success";
export const REMOVE_CARD = "[cards] remove card";
export const GET_WINER = "[cards] get the winner";
export const CHANGE_NAME_COMPETITION = "[cards] change name competition";
export const CHANGE_CURRENT_STATUS = "[cards] change curent status";

export const findeMatches = (word) => ({
  type: FINDE_MATCHES,
  payload: word,
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const getCardsSuccess = (cards) => ({
  type: GET_CARDS_SUCCESS,
  payload: cards,
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  payload: id,
});

export const getWinner = () => ({
  type: GET_WINER,
});

export const changeNameCompetition = (competitionName) => ({
  type: CHANGE_NAME_COMPETITION,
  payload: competitionName,
});

export const changeCrrentSatus = (status) => ({
  type: CHANGE_CURRENT_STATUS,
  payload: status,
});
