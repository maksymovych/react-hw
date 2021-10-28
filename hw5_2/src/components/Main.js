import React from "react";
import { Route, Switch } from "react-router";
import Competitions from "./Competitions/Competitions";
import Error from "./Error/Error";
import Participants from "./Participants/Participants";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Competitions} />
      <Route
        exact
        path="/competition/:competitionId"
        component={Participants}
      />
      <Route component={Error} />
    </Switch>
  );
}

export default Main;
