import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../ui/CustomButton/CustomButton";

function WinnerInfo() {
  const [isShowWinner, setIsShowWinner] = useState(false);
  const { _cards } = useSelector((state) => state.cards);
  const total = _cards.length;

  return (
    <>
      {isShowWinner ? (
        999
      ) : (
        <>
          <Typography align="center" variant="h4">
            Total participants: {total}
          </Typography>
          <CustomButton fullWidth onClick={() => setIsShowWinner(true)}>
            Show winner
          </CustomButton>
        </>
      )}
    </>
  );
}

export default WinnerInfo;
