import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { findeMatches } from "../../../actions";
import SearchBar from "../../SearchBar/SearchBar";
import Cards from "../../Cards/Cards";
import WinnerInfo from "../../WinnerInfo/WinnerInfo";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import Timer from "../../Timer/Timer";
import Loader from "../../Loader/Loader";

function ActiveParticipants() {
  const { cards, registration, competitions } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const value = e.target.value;
    dispatch(findeMatches(value));
  };

  return (
    <>
      <SearchBar onClick={handleChangeInput} />
      {competitions.isFetching && <Loader />}
      <Grid container spacing={4} sx={{ padding: "25px" }}>
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
    </>
  );
}

export default ActiveParticipants;
