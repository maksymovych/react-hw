export const START_TIMER = "[timer] start timer";
export const STOP_TIMER = "[timer] stop";
export const SAVE_NEW_PARTICIPANT = "[new Participant] save new participant";

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const saveNewParticipant = (data) => ({
  type: SAVE_NEW_PARTICIPANT,
  payload: data,
});
