import React, { useState, useContext, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const defaultData = {
  user_id: "",
  nickname: "",
  phone: "",
  year: 0,
  password: "",
  checkPw: "",
  userName: "",
  email: "",
  university: "",
  setUniYear: () => {},
  setUserInfo: () => {},
  checkUniYear: () => {},
};

const RegisterContext = createContext(defaultData);

const RegisterProvider = ({ children }) => {
  const history = useHistory();

  const setUniYear = ({ university, year }) => {
    setState((state) => ({ ...state, university, year }));
    history.push("/register/agreement");
  };

  const checkUniYear = (university) => {
    if (!university.length) return false;
    return true;
  };

  const setUserInfo = ({ userName, user_id, password, email, nickname }) => {
    setState((state) => ({
      ...state,
      userName,
      user_id,
      password,
      email,
      nickname,
    }));
  };

  const termState = {
    ...defaultData,
    setUniYear,
    setUserInfo,
    checkUniYear,
  };

  const [state, setState] = useState(termState);

  return (
    <RegisterContext.Provider value={state}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
