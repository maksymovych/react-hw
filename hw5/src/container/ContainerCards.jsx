import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCards } from "../actions";
import Main from "../components/Main";

export default function ContainerCards() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCards());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return <Main />;
}
