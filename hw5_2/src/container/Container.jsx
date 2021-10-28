import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCards, fetchCompetitions } from "../actions";
import Main from "../components/Main";

export default function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(fetchCompetitions());
  }, [dispatch]);

  return <Main />;
}
