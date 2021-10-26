import { fetchCardsSuccess } from ".";
import { fetchCards as fetchCardsApi, fetchRegistration } from "../apis/index";
import { fetchWinnerInfoApi } from "../apis/index";
import { v4 as uuidv4 } from "uuid";
import { fetchRegistrFormSuccess } from "./registration";

export const fetchCards = () => {
  const random = require("random-name");
  return async (dispatch) => {
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
    }
  };
};

