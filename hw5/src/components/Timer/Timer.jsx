import { Stack, Typography } from "@mui/material";
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
import { timeToString } from "../../utils/timeToString";
import CustomButton from "../ui/CustomButton/CustomButton";

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

  const time = timeToString(timer);

  return (
    <Box>
      <Typography variant="h5">Participant</Typography>
      <Typography variant="body2">
        ID: {userData.id}
        <br />
        Participant: {`${userData.firstName} ${userData.lastName}`}
      </Typography>

      <Typography variant="h4">{time}</Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {isStart && timer ? (
          <>
            <CustomButton onClick={resetTheTimer}>Reset</CustomButton>
            <CustomButton onClick={handleSave}>Save</CustomButton>
          </>
        ) : (
          <CustomButton onClick={starttheTimer}>
            {isStart ? "Stop" : "Start"}
          </CustomButton>
        )}
        <CustomButton onClick={handleCancel}>Cancel</CustomButton>
      </Stack>
    </Box>
  );
}

export default Timer;
