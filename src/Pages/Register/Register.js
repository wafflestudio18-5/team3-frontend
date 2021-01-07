import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "../../Components/Register/RegisterForm";
import { Agreement, Info } from "./";
import { RegisterRoute } from "../../helpers/router";

import { TermProvider } from "../../Context/TermData";
import { RegisterProvider } from "../../Context/RegisterData";
const Register = () => {
  return (
    <RegisterProvider>
      <TermProvider>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <RegisterRoute path="/register/agreement" component={Agreement} />
          <RegisterRoute path="/register/info" component={Info} />
        </Switch>
      </TermProvider>
    </RegisterProvider>
  );
};

export default Register;
