import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Main from "./Pages/Main";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
