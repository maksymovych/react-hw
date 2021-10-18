export const ADD_TO_HISTORY = "add to history";
export const MOVE_TO = "move to";
export const WINNER = "winner";
export const NEW_GAME = "new game";
export const WHO_START = "who start";
export const GIVE_UP = "give up";
export const LIST_OF_WINNERS = "list of winners";

export const addToHistory = (squares) => ({
  type: ADD_TO_HISTORY,
  payload: { squares },
});

export const moveTo = (step, isX) => {
  return {
    type: MOVE_TO,
    payload: { step, isX },
  };
};

export const winnerIs = (player) => {
  return {
    type: WINNER,
    payload: player,
  };
};

export const newGame = () => {
  return {
    type: NEW_GAME,
  };
};
export const whoStart = () => {
  return {
    type: WHO_START,
  };
};

export const giveUp = () => {
  return {
    type: GIVE_UP,
  };
};

export const listOfWinners = (winnersList) => {
  return {
    type: LIST_OF_WINNERS,
    payload: winnersList,
  };
};
