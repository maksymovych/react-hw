import React from "react";
import CustomButton from "../ui/CustomButton/CustomButton";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const styles = {
  border: 0,
  borderRadius: 5,
  padding: "30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  ":hover root": {
    boxShadow: "0 3px 5px 2px rgba(0, 105, 135, .3)",
  },
};
function UserCard({ firstName, lastName, id, time }) {
  return (
    <Grid item xs={12} sm={6} lg={4} xl={3} key={id}>
      <Container sx={styles}>
        <Typography>Id: {id}</Typography>
        <Typography>First name: {firstName}</Typography>
        <Typography>Last name: {lastName}</Typography>
        <Typography>Time: {time}</Typography>
        <CustomButton>ytytyt</CustomButton>
      </Container>
    </Grid>
  );
}

export default UserCard;
