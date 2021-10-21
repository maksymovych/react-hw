import React from "react";
import Cards from "./Cards/Cards";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Input from "./ui/Input/Input";
import Grid from "@mui/material/Grid";
import WinnerInfo from "./WinnerInfo/WinnerInfo";
import { useDispatch, useSelector } from "react-redux";
import { findeMatches } from "../actions";
import { Typography } from "@mui/material";

function Main() {
  const dispatch = useDispatch();
  const { cards } = useSelector((store) => store.cards);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    dispatch(findeMatches(value));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Input label="Search..." onChange={handleChangeInput} />
        {!cards.length ? (
          <Typography>Sorry... no mutches found</Typography>
        ) : (
          <Cards />
        )}
      </Grid>

      <Grid item xs={12} md={4}>
        <RegistrationForm />
        <WinnerInfo />
      </Grid>
    </Grid>
  );
}

export default Main;
