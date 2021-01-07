import React from "react";
import { Switch, Route } from "react-router-dom";

import { Auth, Mail } from "./";
const AuthRoute = () => {
  return (
    <Switch>
      <Route exact path="/my/auth" component={Auth}></Route>
      <Route path="/my/auth/mail" component={Mail}></Route>
    </Switch>
  );
};

export default AuthRoute;
