import React from "react";
import { useGameStore } from "../../context";
import { moveTo, newGame } from "../../actions/gameActions";
import "./Steps.scss";

function Steps() {
  const [{ history, winner, isXTurn }, dispatch] = useGameStore();
  const start = "Start the game";
  const goTo = "Go to move step №";

  const backToStep = (i) => {
    const isX = isXTurn;
    dispatch(moveTo(i, isX));
  };
  const steps = history.map((i, index) => {
    if (index === history.length - 1 || index === 0) {
      return null;
    }

    const label = index ? goTo + index : start;

    return (
      <button key={index} className="step" onClick={backToStep}>
        {label}
      </button>
    );
  });

  return (
    <div className="moves">
      {winner ? (
        <button className="step" onClick={() => dispatch(newGame())}>
          {start}
        </button>
      ) : (
        steps
      )}
    </div>
  );
}

export default Steps;
