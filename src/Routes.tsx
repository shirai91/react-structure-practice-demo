import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import AuthRoute from "Common/AuthRoute";
import UnAuthRoute from "Common/UnAuthRoute";

import Landing from "Landing";
import Login from "Login";
import Dashboard from "Dashboard";

const Routes: React.FC<unknown> = () => (
  <Router>
    <Switch>
      <UnAuthRoute exact path="/">
        <Landing />
      </UnAuthRoute>
      <UnAuthRoute exact path="/login">
        <Login />
      </UnAuthRoute>
      <AuthRoute path="/dashboard">
        <Dashboard />
      </AuthRoute>
    </Switch>
  </Router>
);

export default Routes;
