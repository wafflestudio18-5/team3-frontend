import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.js";

import "./Aside.css";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="login-section">
        <Link to="/" className="logo-img">
          <img
            src="https://everytime.kr/images/about/logo.png"
            alt="logo"
          ></img>
        </Link>
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
      <div className="search">
        <SearchBar
          label="우리 학교 커뮤니티 둘러보기"
          placeHolder="찾으시는 캠퍼스를 검색하세요"
        ></SearchBar>
      </div>
      <section className="campus-list"></section>
    </aside>
  );
};

export default Aside;
