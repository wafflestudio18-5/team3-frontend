import React, { useState, useContext, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { loginUser, sendEmail, updateUser, logoutUser } from '../Api/UserApi';
const defaultList = {
  logined: false,
  user: {
    username: '',
    password: '',
    last_name: '',
    nickname: '',
    university: '',
    year: 2019,
    phone: '',
    email: '',
    is_verified: false,
    last_login: '',
    date_joined: '',
    token: '',
  },
  logoutCookie: () => {},
  login: () => {},
  logout: () => {},
  isLogined: () => {},
  updateUserInfo: () => {},
  emailAuth: () => {},
  userVerified: () => {},
};

const LoginContext = createContext(defaultList);

const LoginProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(['waverytime']);
  const history = useHistory();

  const loginCookie = (info) => {
    setCookie('waverytime', info, { path: '/' });
    setState((state) => ({ ...state, user: info }));
  };

  const logoutCookie = () => {
    removeCookie('waverytime');
    setState((state) => ({ ...state, user: defaultList.user }));
  };

  const isLogined = () => {
    return cookie['waverytime'] !== undefined;
  };

  const login = ({ username, password }) => {
    loginUser({ username, password })
      .then(({ data }) => {
        loginCookie(data);
        window.location.href = '/';
      })
      .catch((err) => {
        console.clear();
        alert('아이디나 비밀번호를 제대로 입력해주세요');
      });
  };
  const logout = (token) => {
    logoutCookie();
    window.location.href = '/';
    logoutUser(token);
  };

  const updateUserInfo = (body, token) => {
    updateUser(body, token)
      .then(({ data }) => {
        setCookie('waverytime', data, { path: '/' });
        setState((state) => ({
          ...state,
          user: data,
        }));
        alert('변경이 완료되었습니다.');
        history.push('/my');
      })
      .catch((err) => {
        alert('이미 존재하는 이메일입니다.');
        console.log(err.reponse);
      });
  };

  const userVerified = () => {
    const newData = {
      ...cookie['waverytime'],
      user: { ...cookie['waverytime'].user, is_verified: true },
    };
    setState((state) => ({ ...state, user: newData }));
    setCookie('waverytime', newData, { path: '/' });
  };

  const emailAuth = (body, token) => {
    alert('이메일이 발송되었습니다. 이메일의 링크를 클릭하십시오.');
    sendEmail(body, token).catch((err) => console.log(err.response));
  };

  const termState = {
    ...defaultList,
    login,
    logoutCookie,
    isLogined,
    logout,
    updateUserInfo,
    emailAuth,
    userVerified,
  };

  useEffect(() => {
    const user = cookie['waverytime'];
    if (user) {
      setState((state) => ({ ...state, user }));
    }
  }, [cookie]);

  const [state, setState] = useState(termState);

  return <LoginContext.Provider value={state}>{children}</LoginContext.Provider>;
};

const useLoginContext = () => useContext(LoginContext);

export { useLoginContext, LoginProvider };
