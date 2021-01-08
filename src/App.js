import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { MainRoute, PrivateRoute } from './helpers/router/';
import routes from './Routes';
import './App.css';

function App() {
  return (
    <Switch>
      <MainRoute exact path={routes.main.path} component={routes.main.component} />
      <Route path={routes.login.path} component={routes.login.component} />
      <Route path={routes.register.path} component={routes.register.component} />
      <PrivateRoute path={routes.verified.path} component={routes.verified.component} />
      <PrivateRoute path={routes.UserInfo.path} component={routes.UserInfo.component} />
      <Route exact path={routes.board.path} component={routes.board.component} />
      <Route path={routes.post.path} component={routes.post.component} />
      <Redirect path="*" to={routes.main.path} />
    </Switch>
  );
}

export default App;
