import React, { useState, useContext, createContext } from "react";
import { useCookies } from "react-cookie";
import { loginUser } from "../Api/UserApi";
import { useHistory } from "react-router-dom";
const defaultList = {
  logined: false,
  logoutCookie: () => {},
  consoleCookie: () => {},
  login: () => {},
  isLogined: () => {},
};

const LoginContext = createContext(defaultList);

const LoginProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["waverytime"]);
  const history = useHistory();
  const loginCookie = (info) => {
    setCookie("waverytime", info, { path: "/" });
  };

  const logoutCookie = () => {
    removeCookie("waverytime");
  };

  const consoleCookie = () => {
    console.log(cookie);
  };

  const isLogined = () => {
    return cookie["waverytime"] !== undefined;
  };

  const login = ({ username, password }) => {
    loginUser({ username, password })
      .then(({ data }) => {
        setState((state) => ({ ...state, info: true }));
        loginCookie(data);

        consoleCookie();
        history.push("/");
      })
      .catch((err) => {
        console.clear();
        alert("아이디나 비밀번호를 제대로 입력해주세요");
      });
  };

  const termState = {
    ...defaultList,
    login,
    logoutCookie,
    consoleCookie,
    isLogined,
  };

  const [state, setState] = useState(termState);

  return (
    <LoginContext.Provider value={state}>{children}</LoginContext.Provider>
  );
};

const useLoginContext = () => useContext(LoginContext);

export { useLoginContext, LoginProvider };
