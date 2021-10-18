import React from "react";
import { giveUp } from "../../actions";
import { useGameStore } from "../../context";
import "./GiveUp.scss";

function GiveUp() {
  const [{ winner }, dispatch] = useGameStore();

  const giveUpClick = () => {
    return winner ? "" : dispatch(giveUp());
  };

  return (
    <div className="giveUp">
      <button className="buttonGiveUp" onClick={giveUpClick}>
        Give up
      </button>
    </div>
  );
}

export default GiveUp;
