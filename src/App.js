import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar/NavBar'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Redirect path='*' to='/' />
      </Switch>
    </>
  );
}

export default App;
