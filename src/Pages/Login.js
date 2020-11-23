import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginFom";
import { Box, Image, Stack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Stack align="center" justify="center" pt="60">
      <Link to="/">
        <img
          src="https://everytime.kr/images/index.login.logo.png"
          alt="everytime logo"
        ></img>
      </Link>
      <LoginForm />
    </Stack>
  );
};

export default Login;
