import React from "react";
import CustomButton from "../ui/CustomButton/CustomButton";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ButtonClose from "../ui/ButtonClose/ButtonClose";
import { useDispatch } from "react-redux";
import { removeCard } from "../../actions";
import InfoCard from "../ui/InfoCard/Infocard";
import { stylesContainer } from "../../assets/stulesContainer";

const styles = {
  padding: "30px",
  ":hover button": {
    opacity: 1,
  },
};
function UserCard({ firstName, lastName, id, time }) {
  const dispatch = useDispatch();
  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3} key={id}>
      <Container sx={{ ...stylesContainer, ...styles }}>
        <ButtonClose onClick={handleRemoveCard}>
          <Typography variant="subtitle1" gutterBottom component="span">
            Delete
          </Typography>
        </ButtonClose>
        <InfoCard
          id={id}
          firstName={firstName}
          lastName={lastName}
          time={time}
        />
        <CustomButton fullWidth onClick={handleRemoveCard}>
          Delete
        </CustomButton>
      </Container>
    </Grid>
  );
}

export default UserCard;
