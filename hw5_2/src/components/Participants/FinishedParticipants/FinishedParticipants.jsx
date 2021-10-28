import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { stylesContainer } from "../../../assets";
import Cards from "../../Cards/Cards";
import TheWinner from "../../WinnerInfo/TheWinner";

function FinishedParticipants() {
  const { cards, competitionName } = useSelector((state) => state.cards);

  return (
    <>
      <Grid container spacing={4} sx={{ padding: "25px" }}>
        <Grid item m="0 auto">
          <Container sx={{ ...stylesContainer }}>
            <Typography variant="h4">Name: {competitionName}</Typography>
            <TheWinner />
          </Container>
        </Grid>
        <Grid item>
          {![...cards].length ? (
            <Typography> Sorry... no mutches found</Typography>
          ) : (
            <Cards />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default FinishedParticipants;
