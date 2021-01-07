import React, { useState, useContext, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { loginUser, updateUser } from '../Api/UserApi';
const defaultList = {
  logined: false,
  user: {},
  logoutCookie: () => {},
  consoleCookie: () => {},
  login: () => {},
  logout: () => {},
  isLogined: () => {},
  updateUserInfo: () => {},
};

const LoginContext = createContext(defaultList);

const LoginProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(['waverytime']);
  const history = useHistory();

  const loginCookie = (info) => {
    setState((state) => ({ ...state, user: info }));
    setCookie('waverytime', info, { path: '/' });
  };

  const logoutCookie = () => {
    removeCookie('waverytime');
  };

  const consoleCookie = () => {
    // console.log(cookie);
  };

  const isLogined = () => {
    return cookie['waverytime'] !== undefined;
  };

  const login = ({ username, password }) => {
    loginUser({ username, password })
      .then(({ data }) => {
        setState((state) => ({ ...state, info: true }));
        loginCookie(data);

        consoleCookie();
        history.push('/');
      })
      .catch((err) => {
        console.clear();
        alert('아이디나 비밀번호를 제대로 입력해주세요');
      });
  };
  const logout = () => {
    logoutCookie();
    history.push('/');
  };

  const updateUserInfo = (body, token) => {
    updateUser(body, token)
      .then(({ data }) => {
        setCookie('waverytime', data, { path: '/' });
        setState((state) => data);
        alert('변경이 완료되었습니다.');
        history.push('/my');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const termState = {
    ...defaultList,
    login,
    logoutCookie,
    consoleCookie,
    isLogined,
    logout,
    updateUserInfo,
  };

  useEffect(() => {
    const user = cookie['waverytime'];
    if (user) {
      setState((state) => ({ ...state, user }));
    }
  }, []);

  const [state, setState] = useState(termState);

  return <LoginContext.Provider value={state}>{children}</LoginContext.Provider>;
};

const useLoginContext = () => useContext(LoginContext);

export { useLoginContext, LoginProvider };
