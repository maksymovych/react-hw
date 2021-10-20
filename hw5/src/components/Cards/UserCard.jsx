import React from "react";
import CustomButton from "../ui/CustomButton/CustomButton";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
    padding: "30px",
  },
});

function UserCard() {
  const classes = useStyles();
  const random = require("random-name");
  return (
    <Grid className={classes.root} item xs={12} sm={6} lg={4} xl={3}>
      <Typography>id: 12121221</Typography>
      <Typography>name: {random.first()}</Typography>
      <Typography>rate: 12121221</Typography>
      <CustomButton>ytytyt</CustomButton>
    </Grid>
  );
}

export default UserCard;
