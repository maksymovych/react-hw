import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../actions";
import Main from "../components/Main";

export default function ContainerCards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return <Main />;
}
