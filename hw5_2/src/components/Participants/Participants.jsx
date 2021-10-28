import React from "react";
import { useSelector } from "react-redux";
import ActiveParticipants from "./ActiveParticipants/ActiveParticipants";
import FinishedParticipants from "./FinishedParticipants/FinishedParticipants";

function Participants() {
  const { status } = useSelector((state) => state.cards);
  console.log(status);
  const isFinished = status === "finished";

  return <>{isFinished ? <FinishedParticipants /> : <ActiveParticipants />}</>;
}

export default Participants;
