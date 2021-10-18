import React, { useEffect } from "react";
import { useGameStore } from "../../context";
import { listOfWinners } from "../../actions";
import "./WinnersList.scss";
function WinnersList() {
  const [{ winnerList }, dispatch] = useGameStore();

  useEffect(() => {
    if (localStorage.getItem("winnerList")) {
      let list = JSON.parse(localStorage.getItem("winnerList"));
      dispatch(listOfWinners(list));
    }
  }, [dispatch]);

  return (
    <div className="winerList">
      <p>Winner List:</p>
      {winnerList && winnerList.map((winner, i) => <p key={i}>{winner}</p>)}
    </div>
  );
}

export default WinnersList;
