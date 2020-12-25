import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "../Components/Register/RegisterForm";
import RegisterAgreement from "./RegisterAgreement";
const Register = () => {
  return (
    <>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route path="/register/agreement" component={RegisterAgreement} />
      </Switch>
    </>
  );
};

export default Register;
