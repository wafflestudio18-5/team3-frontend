import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// 게시판 시간표 강의평가 학점계산기 친구 책방 캠퍼스픽
// https://cf-fpi.everytime.kr/0.png
const navMenu = [
  { name: "게시판", address: "" },
  { name: "강의평가", address: "" },
  { name: "캠퍼스픽", address: "" },
  { name: "깃허브", address: "" },
];

function NavBar() {
  const renderedMenu = navMenu.map((item) => {
    const { address, name } = item;
    return (
      <li className="nav-li">
        <Link to={address}>{name}</Link>
      </li>
    );
  });
  return (
    <nav className="nav-wrap">
      <Link to="/">
        <img
          className="logo"
          src="https://everytime.kr/images/new/nav.logo.png"
          alt="logo"
        ></img>
      </Link>
      <div className="header">
        <p className="main-app">에브리타임</p>
        <span className="univ">서울대</span> {/* 하드코딩 바꾸기*/}
      </div>
      <ul className="menu">{renderedMenu}</ul>
      <Link to="/">
        <img></img>
      </Link>
      <Link to="/">
        <img></img>
      </Link>
    </nav>
  );
}

export default NavBar;
