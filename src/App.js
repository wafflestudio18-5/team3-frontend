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
      {/* <Route exact path={routes.myarticlePage.path} component={routes.myarticlePage.component} /> */}
      <PrivateRoute exact path={routes.myarticle.path} component={routes.myarticle.component} />
      {/* <Route exact path={routes.mycommentarticlePage.path} component={routes.mycommentarticlePage.component} /> */}
      <PrivateRoute
        exact
        path={routes.mycommentarticle.path}
        component={routes.mycommentarticle.component}
      />
      <PrivateRoute exact path={routes.hotarticle.path} component={routes.hotarticle.component} />
      <PrivateRoute exact path={routes.bestarticle.path} component={routes.bestarticle.component} />

      <PrivateRoute exact path={routes.post.path} component={routes.post.component} />
      <PrivateRoute exact path={routes.boardPage.path} component={routes.boardPage.component} />
      <PrivateRoute exact path={routes.board.path} component={routes.board.component} />

      <Redirect path="*" to={routes.main.path} />
    </Switch>
  );
}

export default App;
