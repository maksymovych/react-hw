import React from "react";
import { Route, Switch } from "react-router";
import Competitions from "./Competitions/Competitions";
import CreateContest from "./Create/Create";
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
      <Route exact patch="/create" component={CreateContest} />
      <Route component={Error} />
    </Switch>
  );
}

export default Main;
