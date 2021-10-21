const { default: axios } = require("axios");

export const API = "http://localhost:4000";

const apiCall = axios.create({
  baseURL: API,
});

export async function fetchCards() {
  const { data } = await apiCall.get("/cards");

  return data;
}

export async function fetchRegistration() {
  const { registration } = await apiCall.get("/registration/");
  return registration;
}

export async function fetchWinnerInfoApi() {
  const { winnerInfo } = await apiCall.get("/winnerInfo/");
  return winnerInfo;
}
