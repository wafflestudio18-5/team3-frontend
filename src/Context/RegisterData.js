import React, { useState, useContext, createContext } from "react";
import { checkUserProperty } from "../Api/UserApi";

const defaultData = {
  info: {
    username: "", //아이디
    nickname: "", // 닉네임
    phone: "", //핸드폰
    year: 0,
    password: "",
    last_name: "", //이름
    email: "", //이메일
    university: "",
    is_verified: false,
  },
  setUniYear: () => {},
  setUserInfo: () => {},
  checkUniYear: () => {},
};

const RegisterContext = createContext(defaultData);

const RegisterProvider = ({ children }) => {
  const setUniYear = ({ university, year }) => {
    setState((state) => ({
      ...state,
      info: {
        ...state.info,
        university,
        year: Number(year),
      },
    }));
  };

  const checkUniYear = (university) => {
    if (!university.length) return false;
    return true;
  };

  const setUserInfo = ({
    userName,
    user_id,
    password,
    email,
    nickName,
    phone,
  }) => {
    setState((state) => ({
      ...state,
      info: {
        ...state.info,
        last_name: userName,
        username: user_id,
        password,
        email,
        nickname: nickName,
        phone:
          `${phone.slice(0, 3)}` +
          `-` +
          `${phone.slice(3, phone.length - 4)}` +
          `-` +
          `${phone.slice(phone.length - 4, phone.length)}`,
      },
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
