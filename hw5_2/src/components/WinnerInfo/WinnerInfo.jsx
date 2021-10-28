import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { competitionFinished } from "../../actions";
import { stylesContainer } from "../../assets/stulesContainer";
import CustomButton from "../ui/CustomButton/CustomButton";
import TheWinner from "./TheWinner";

function WinnerInfo() {
  const [isShowWinner, setIsShowWinner] = useState(false);
  const dispatch = useDispatch();
  const { competitionId } = useParams();
  const { _cards } = useSelector((state) => state.cards);

  const total = _cards.length;

  const styles = {
    p: "30px",
    mt: "30px",
  };

  const handleShowWinner = () => {
    setIsShowWinner(true);
    dispatch(competitionFinished(competitionId.replace(":", "")));
  };
  return (
    <Container sx={{ ...stylesContainer, ...styles }}>
      {isShowWinner ? (
        <TheWinner />
      ) : (
        <>
          <Typography align="center" variant="h5" sx={{ p: "10px" }}>
            Total participants: {total}
          </Typography>
          <CustomButton fullWidth onClick={handleShowWinner}>
            Show winner
          </CustomButton>
        </>
      )}
    </Container>
  );
}

export default WinnerInfo;
