import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingStart } from "../actions";
import { fetchCards } from "../apis";
import ActiveParticipants from "../components/ActiveParticipants/ActiveParticipants";

export default function ActiveParticContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return <ActiveParticipants />;
}
