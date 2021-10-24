import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { stylesContainer } from "../../assets/stulesContainer";
import CustomButton from "../ui/CustomButton/CustomButton";
import TheWinner from "./TheWinner";

function WinnerInfo() {
  const [isShowWinner, setIsShowWinner] = useState(false);
  const { _cards } = useSelector((state) => state.cards);
  const total = _cards.length;

  const styles = {
    p: "30px",
    mt: "30px",
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
          <CustomButton fullWidth onClick={() => setIsShowWinner(true)}>
            Show winner
          </CustomButton>
        </>
      )}
    </Container>
  );
}

export default WinnerInfo;
