import React from "react";
import { whoStart } from "../../actions";
import { useGameStore } from "../../context";
import { getMessage } from "../../utils";
import Button from "../ui/Button/Button";
import "./Player.scss";

function Player() {
  const [{ winner, history, isXTurn }, dispatch] = useGameStore();
  const historyLength = history.length;

  const result = getMessage(winner, historyLength, isXTurn);

  let classes = ["btn"];
  let value = false;

  if (historyLength > 1) {
    value = true;
    classes.push("disabled");
  }

  return (
    <div className="player">
      <p>{result.message}</p>
      <Button
        disabled={value}
        className={classes.join(" ")}
        onClick={() => dispatch(whoStart())}
      >
        <span>{result.symbol}</span>
      </Button>
    </div>
  );
}

export default Player;
