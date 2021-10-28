import { Typography } from "@mui/material";
import React from "react";

function Error({ error }) {
  console.log(error);
  return (
    <Typography variant="h2" sx={{ color: "red" }}>
      Error! Server not found.
      {error}
    </Typography>
  );
}

export default Error;
