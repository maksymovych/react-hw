import React from "react";
import { useSelector } from "react-redux";
import InfoCard from "../ui/InfoCard/Infocard";

function TheWinner() {
  const { theWinner } = useSelector((state) => state.cards);
  const { id, firstName, lastName, time } = theWinner;
  return (
    <InfoCard id={id} firstName={firstName} lastName={lastName} time={time} />
  );
}

export default TheWinner;
