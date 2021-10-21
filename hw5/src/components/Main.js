import React from "react";
import Cards from "./Cards/Cards";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Input from "./ui/Input/Input";
import Grid from "@mui/material/Grid";
import WinnerInfo from "./WinnerInfo/WinnerInfo";


function Main() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Input />
        <Cards />
      </Grid>

      <Grid item xs={12} md={4}>
        <RegistrationForm />
        <WinnerInfo />
      </Grid>
    </Grid>
  );
}

export default Main;
