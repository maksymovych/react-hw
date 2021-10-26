import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Cards from "../Cards/Cards";
import WinnerInfo from "../WinnerInfo/WinnerInfo";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Timer from "../Timer/Timer";

function ActiveParticipants() {
  const { cards, registration } = useSelector((store) => store);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        {!cards.cards.length ? (
          <Typography>Sorry... no mutches found</Typography>
        ) : (
          <Cards />
        )}
      </Grid>

      <Grid item xs={12} md={4}>
        {registration.isRegistered ? <Timer /> : <RegistrationForm />}
        <WinnerInfo />
      </Grid>
    </Grid>
  );
}

export default ActiveParticipants;
