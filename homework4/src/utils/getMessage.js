export const getMessage = (winner, historyLength, isXTurn) => {
  const whosTurn = "You can choose who will start the game X or 0:";
  const theWinnerIs = "The Winner is";
  const its = "It`s";
  const next = "Next is:";

  let message = "";
  let symbol = !winner && isXTurn ? "X" : "O";
  if (historyLength === 1) {
    message = whosTurn;
  } else if (winner === "Draw") {
    symbol = "D";
    message = its;
  } else if (!winner && historyLength > 1) {
    message = next;
  } else if (winner) {
    symbol = winner;
    message = theWinnerIs;
  }
  return {
    message,
    symbol,
  };
};
