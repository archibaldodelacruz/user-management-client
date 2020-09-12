import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import AccountInfo from "./containers/AccountInfo.js"

const routes = () => {
  return (
    <Switch>
      <Route exact path="/accountinfo">
        <AccountInfo />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default routes;
