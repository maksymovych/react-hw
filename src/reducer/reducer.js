import { CHANGE_FORM, GET_USER_DATA, SUBMIT_FORM } from "../actions/actions";

export const initialState = {
  step: 1,
  firstForm: {},
  secondForm: {},
  thirdForm: {},
  fourthForm: {},
  result: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        step: state.step + action.payload,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        [action.payload.target]: action.payload.data,
      };
    case GET_USER_DATA:
      return {
        ...state,
        result: [
          { title: "First name", value: state.firstForm.name },
          { title: "Last name", value: state.firstForm.lastName },
          { title: "Email", value: state.firstForm.email },
          { title: "City", value: state.secondForm.city },
          { title: "Street", value: state.secondForm.street },
          { title: "House", value: state.secondForm.house },
        ],
      };
    default:
      return state;
  }
};
