import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import img_logo from "../../Images/logo.png";

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
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img className="nav-logo-img" src={img_logo} alt="Everytime" />
        </Link>
        <div>
          <p className="nav-title">에브리타임</p>
          <p className="nav-univ">서울대</p> {/* 하드코딩 바꾸기*/}
        </div>
      </div>

      <ul className="nav-menu">{renderedMenu}</ul>
    </nav>
  );
}

export default NavBar;
