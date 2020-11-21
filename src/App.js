import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import './App.css';
import MainPage from './Components/MainPage/MainPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
    </Switch>
  );
}

export default App;
