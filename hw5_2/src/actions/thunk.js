import {
  fetchCardsSuccess,
  fetchCompetitionsSuccess,
  fetchingFinished,
} from ".";
import { fetchCards as fetchCardsApi } from "../apis";
import { fetchCompetitions as fetchCompetitionsApi } from "../apis";

import { v4 as uuidv4 } from "uuid";
import { fetchingStart } from ".";

export const fetchCards = () => {
  const random = require("random-name");
  return async (dispatch) => {
    dispatch(fetchingStart());
    try {
      const cards = await fetchCardsApi();
      const newCards = cards.map((card) => ({
        ...card,
        firstName: random.first(),
        lastName: random.last(),
        id: uuidv4().split("-")[0],
      }));
      dispatch(fetchCardsSuccess(newCards));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(fetchingFinished());
    }
  };
};

export const fetchCompetitions = () => {
  return async (dispatch) => {
    dispatch(fetchingStart());
    try {
      const competitions = await fetchCompetitionsApi();
      dispatch(fetchCompetitionsSuccess(competitions));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(fetchingFinished());
    }
  };
};
