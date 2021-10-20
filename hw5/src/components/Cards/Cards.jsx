import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";

function Cards() {
  const { cards } = useState();
  console.log("qwwqwqw", cards);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <UserCard />
    </Grid>
  );
}

export default Cards;
