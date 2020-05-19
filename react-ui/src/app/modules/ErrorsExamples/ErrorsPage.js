import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ErrorPage1} from "./ErrorPage1";
import {ErrorPage2} from "./ErrorPage2";
import {ErrorPage3} from "./ErrorPage3";

export default function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/error-v1" />
      <Route path="/error/error-v1" component={ErrorPage1} />
      <Route path="/error/error-v2" component={ErrorPage2} />
      <Route path="/error/error-v3" component={ErrorPage3} />
    </Switch>
  );
}
