import { Typography } from "@mui/material";
import React from "react";

function InfoCard({ id, firstName, lastName, time }) {
  return (
    <>
      <Typography>Id: {id}</Typography>
      <Typography>First name: {firstName}</Typography>
      <Typography>Last name: {lastName}</Typography>
      <Typography>Time: {time}</Typography>
    </>
  );
}

export default InfoCard;
