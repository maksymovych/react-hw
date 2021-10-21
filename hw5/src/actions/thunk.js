import { fetchCardsSuccess, getCardsSuccess } from ".";
import { useId } from "react-id-generator";
import { fetchCards as fetchCardsApi } from "../apis/index";
import { fetchWinnerInfoApi } from "../apis/index";
import { cards } from "../data/localDB";
import { v4 as uuidv4 } from "uuid";

export const fetchCards = () => {
  const random = require("random-name");
  return async (dispatch) => {
    try {
      const cards = await fetchCardsApi();
      console.log("!!!!", cards);
      const newCards = cards.map((card) => ({
        ...card,
        firstName: random.first(),
        id: useId(),
      }));
      dispatch(fetchCardsSuccess(newCards));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchWinnerInfo = () => {
  return async (dispatch) => {
    try {
      const winnerInfo = await fetchWinnerInfoApi();
      console.log(winnerInfo);
    } catch (e) {
      console.error(e);
    }
  };
};

export const getCards = () => {
  return (dispatch) => {
    try {
      const random = require("random-name");
      const newCards = cards.map((card) => ({
        ...card,
        firstName: random.first(),
        lastName: random.last(),
        id: uuidv4().split("-")[0],
      }));
      dispatch(getCardsSuccess(newCards));
    } catch (e) {
      console.error(e);
    }
  };
};
