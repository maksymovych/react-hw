export const CHANGE_FORM = "[form] - change form";
export const SUBMIT_FORM = "[form] - submit form";
export const GET_USER_DATA = "[user data] - get user data";
export const GET_USER_PHOTO = "[user photo] - get user photo";

export const changeForm = (step) => ({
  type: CHANGE_FORM,
  payload: step,
});

export const submitForm = (target, data) => ({
  type: SUBMIT_FORM,
  payload: {
    target,
    data,
  },
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const getUserPhoto = () => ({
  type: GET_USER_PHOTO,
});
