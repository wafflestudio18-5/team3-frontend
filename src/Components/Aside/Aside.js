import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./Aside.css";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="login-section">
        <img src="" alt="logo"></img>
        <Link to="/login">
          <button className="login-btn button">로그인</button>
        </Link>
        <Link to="/register">
          <button className="register-btn button">에브리타임 회원가입</button>
        </Link>
        <Link>
          <p className="description-font">아이디/비밀번호 찾기</p>
        </Link>
      </div>
      <div className="search"></div>
      <section className="campus-list"></section>
    </aside>
  );
};

export default Aside;
