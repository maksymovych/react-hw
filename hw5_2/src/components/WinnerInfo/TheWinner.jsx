import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWinner } from "../../actions";
import InfoCard from "../ui/InfoCard/Infocard";

function TheWinner() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWinner());
  }, [dispatch]);
  const { theWinner } = useSelector((state) => state.cards);
  const { id, firstName, lastName, time } = theWinner;

  return (
    <>
      <Typography align="center" variant="h4">
        The winner
      </Typography>
      <InfoCard id={id} firstName={firstName} lastName={lastName} time={time} />
    </>
  );
}

export default TheWinner;
