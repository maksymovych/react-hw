import { Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  cancelTimer,
  saveNewParticipant,
  startTimer,
  stopTimer,
} from "../../actions";
import { stylesContainer } from "../../assets/stulesContainer";
import { timeToString } from "../../utils/timeToString";
import CustomButton from "../ui/CustomButton/CustomButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

function Timer() {
  const { isStart, userData } = useSelector((state) => state.registration);
  const [timer, setTimer] = useState(0);
  const dispatch = useDispatch();
  const starttheTimer = () => {
    dispatch(startTimer());
  };

  const resetTheTimer = () => {
    setTimer(0);
    dispatch(stopTimer());
  };

  const handleCancel = () => {
    dispatch(cancelTimer());
  };

  const handleSave = () => {
    dispatch(saveNewParticipant({ ...userData, time }));
    dispatch(cancelTimer());
  };

  useEffect(() => {
    let intervalId = null;
    if (isStart) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isStart) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isStart]);
  const isStopReset = (isStart && !!timer) || (!!timer && !isStart);
  const time = timeToString(timer);
  return (
    <Modal open={true}>
      <Box sx={{ ...style, ...stylesContainer }}>
        <Typography variant="h5">Participant</Typography>
        <Typography variant="body2">
          ID: {userData.id}
          <br />
          Participant: {`${userData.firstName} ${userData.lastName}`}
        </Typography>

        <Typography variant="h4" align="center" sx={{ py: "20px" }}>
          {time}
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <CustomButton onClick={starttheTimer}>
            {isStart ? "Stop" : "Start"}
          </CustomButton>
          {isStopReset && (
            <>
              <CustomButton onClick={resetTheTimer}>Reset</CustomButton>
              <CustomButton onClick={handleSave}>Save</CustomButton>
            </>
          )}

          <CustomButton onClick={handleCancel}>Cancel</CustomButton>
        </Stack>
      </Box>
    </Modal>
  );
}

export default Timer;
