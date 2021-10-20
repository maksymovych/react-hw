import { fetchCardsSuccess } from ".";
import { fetchCards as fetchCardsApi } from "../apis/index";

export const fetchCards = () => {
  const random = require("random-name");

  return async (dispatch) => {
    try {
      const cards = await fetchCardsApi();
      const newCards = cards.map((card) => ({
        ...card,
        firstName: random.first(),
        lastName: random.last(),
      }));
      dispatch(fetchCardsSuccess(newCards));
    } catch (e) {
      console.error(e);
    }
  };
};
