import { START_TIMER, STOP_TIMER } from "../actions";
import { REGISTR_NEW_USER, CANCEL_TIMER } from "../actions/registration";

const initialState = {
  isStart: false,
  isRegistered: false,
  userData: {},
  fieldData: {
    title: "Registration user",
    inputs: [
      {
        registr: "firstName",
        label: "First Name",
        input: "Enter first name...",
      },
      { registr: "lastName", label: "Last Name", input: "Enter last name..." },
    ],
    button: "Register participant",
  },
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTR_NEW_USER:
      return {
        ...state,
        isRegistered: true,
        userData: { ...action.payload },
      };
    case CANCEL_TIMER:
      return {
        ...state,
        isRegistered: false,
        isStart: false,
        userData: {},
      };
    case START_TIMER:
      return {
        ...state,
        isStart: !state.isStart,
      };
    case STOP_TIMER:
      return {
        ...state,
        isStart: false,
      };
    default:
      return state;
  }
};
