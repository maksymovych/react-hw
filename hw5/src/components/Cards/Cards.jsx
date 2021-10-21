import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

function Cards() {
  const { cards } = useSelector((state) => state.cards);
  const listOfcards = [...cards].map(({ id, firstName, lastName, time }) => (
    <UserCard
      key={id}
      id={id}
      firstName={firstName}
      lastName={lastName}
      time={time}
    />
  ));

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {listOfcards}
    </Grid>
  );
}

export default Cards;
