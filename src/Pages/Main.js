import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NavBar from "../Components/NavBar/NavBar";
import NotLoginedMain from "../Components/NotLoginedMain/NotLoginedMain";

const Main = () => {
  const history = useHistory();

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    if (!checkLogin()) {
      setLoginState(false);
    }
  }, []);

  const checkLogin = () => {
    if (localStorage.getItem("everytime-id")) {
      return true;
    }
    return false;
  };

  const renderedMainPage = loginState ? (
    <div>
      <NavBar />
      <h1>Welcome!</h1>
    </div>
  ) : (
    <NotLoginedMain />
  );

  return <>{renderedMainPage}</>;
};

export default Main;
