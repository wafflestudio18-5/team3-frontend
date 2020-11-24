import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={routes.main.component} />
        <Route path={routes.login.path} component={routes.login.component} />
        <Route
          path={routes.register.path}
          component={routes.register.component}
        />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
