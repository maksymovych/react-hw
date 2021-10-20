const { default: axios } = require("axios");

export const API = "http://localhost:4000/";

const apiCall = axios.create({
  baseURL: API,
});

export async function fetchCards() {
  const { data } = await apiCall.get("cards/");
  return data;
}

export async function fetchRegistration() {
  const { data } = await apiCall.get("registration/");
  return data;
}

export async function fetchWinnerInfo() {
  const { data } = await apiCall.get("winnerInfo/");
  return data;
}
