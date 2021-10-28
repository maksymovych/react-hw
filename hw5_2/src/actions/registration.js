export const FETCH_REGISTRATION_FORM_SUCCESS =
  "[registration] fetch data success";
export const REGISTR_NEW_USER = "[registration] registr new user";
export const CANCEL_TIMER = "[timer] cancel";

export const fetchRegistrFormSuccess = (data) => ({
  type: FETCH_REGISTRATION_FORM_SUCCESS,
  payload: data,
});

export const registrNewUser = (data) => ({
  type: REGISTR_NEW_USER,
  payload: data,
});

export const cancelTimer = () => ({
  type: CANCEL_TIMER,
});
