import React from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import { CampusList } from "./";
import "./Aside.css";

const MobileAside = () => {
  return (
    <aside className="m-aside">
      <div className="login-section bottom-border">
        <img src="https://everytime.kr/images/about/logo.png" alt="logo"></img>
        <Link to="/login">
          <button className="login-btn button">로그인</button>
        </Link>
        <Link to="/register">
          <button className="register-btn button">에브리타임 회원가입</button>
        </Link>
        <Link to="/">
          <p className="description-font">아이디/비밀번호 찾기</p>
        </Link>
      </div>
      <SearchList list={CampusList} mobile={true} />
    </aside>
  );
};

export default MobileAside;
