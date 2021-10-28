import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { changeCrrentSatus, changeNameCompetition } from "../../actions";
import { stylesContainer } from "../../assets/index";
import CustomButton from "../ui/CustomButton/CustomButton";

function CardCompetition({ competitionId, name, status }) {
  const dispatch = useDispatch();

  const { theWinner } = useSelector((state) => state.cards);
  const { lastName } = theWinner;
  const winner = lastName;

  const history = useHistory();
  function handleShow() {
    dispatch(changeCrrentSatus(status));

    dispatch(changeNameCompetition(name));

    history.push(`/competition/:${competitionId}`);
  }

  const styles = { pb: "10px" };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Container sx={{ ...stylesContainer }}>
        <Typography sx={{ ...styles }}>Id: {competitionId}</Typography>
        <Typography sx={{ ...styles }}>Name: {name}</Typography>
        <Typography sx={{ ...styles }}>Status: {status}</Typography>
        {winner && <Typography sx={{ ...styles }}>Winner: {winner}</Typography>}

        <CustomButton fullWidth onClick={handleShow}>
          Show
        </CustomButton>
      </Container>
    </Grid>
  );
}

export default CardCompetition;
