import { fetchCardsSuccess, getCardsSuccess } from ".";
import { useId } from "react-id-generator";
import { fetchCards as fetchCardsApi } from "../apis/index";
import { fetchWinnerInfoApi } from "../apis/index";
import { cards } from "../data/localDB";

export const fetchCards = () => {
  const random = require("random-name");
  return async (dispatch) => {
    try {
      const cards = await fetchCardsApi();
      console.log("!!!!", cards);
      const newCards = cards.map((card) => ({
        ...card,
        name: random.first(),
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
        name: random.first(),
        id: useId(),
      }));
      dispatch(getCardsSuccess(newCards));
    } catch (e) {
      console.error(e);
    }
  };
};
