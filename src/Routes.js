import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Form from "./views/Form";

export const Routes = () => (
  <Switch>
    <Route path="/Form/:formType" component={Form} />
    <Redirect to="/Form/income" />
  </Switch>
);
