import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from '@chakra-ui/react';

import LoginForm from '../Components/LoginForm/LoginFom';
import Footer from '../Components/Footer/Footer.js';

const Login = () => {
  return (
    <div className="nanum">
      <Stack align="center" justify="center" pt="60">
        <Link to="/">
          <img src="https://everytime.kr/images/index.login.logo.png" alt="everytime logo"></img>
        </Link>
        <LoginForm />
      </Stack>
      <Footer page="login" />
    </div>
  );
};

export default Login;
