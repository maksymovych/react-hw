import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCompetition from "./CardCompetition";
import SearchBar from "../SearchBar/SearchBar";
import { searchCompetition } from "../../actions";
import Loader from "../Loader/Loader";
import Create from "../Create/Create";

function Competitions() {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.competitions);

  function handleSearchCompetition(e) {
    dispatch(searchCompetition(e.target.value));
  }

  const { competitions } = useSelector((state) => state.competitions);

  const cards = [...competitions].map(
    ({ competitionId, name, winner, status }) => (
      <CardCompetition
        key={competitionId}
        competitionId={competitionId}
        name={name}
        winner={winner}
        status={status}
      />
    )
  );
  return (
    <>
      <SearchBar onChange={handleSearchCompetition}>
        <Create />
      </SearchBar>

      <Grid
        sx={{ p: "25px" }}
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {isFetching && <Loader />}
        {cards}
      </Grid>
    </>
  );
}

export default Competitions;
