import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchList from "./SearchList";
import "./Aside.css";

const campusList = [
  {
    name: "와플대학교",
    link: "/",
  },
  {
    name: "단풍대학교",
    link: "/",
  },
  {
    name: "메아리대학교",
    link: "/",
  },
  {
    name: "스너퍼대학교",
    link: "/",
  },
  {
    name: "바팩대학교",
    link: "/",
  },
  {
    name: "다담대학교",
    link: "/",
  },
  {
    name: "바쿠스대학교",
    link: "/",
  },
  {
    name: "AAA대학교",
    link: "/",
  },
  {
    name: "SNUPO대학교",
    link: "/",
  },
  {
    name: "야조연대학교",
    link: "/",
  },
  {
    name: " caffe인대학교",
    link: "/",
  },
  {
    name: "연세대학교",
    link: "/",
  },
  {
    name: "고려대학교",
    link: "/",
  },
  {
    name: "카이스트",
    link: "/",
  },
  {
    name: "서울대학교",
    link: "/",
  },
];

const Aside = () => {
  const [uniList, setUniList] = useState(campusList);
  const onUniChange = (list) => {
    setUniList(list);
  };
  return (
    <aside className="aside">
      <div className="login-section bottom-border">
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
        <Link to="/">
          <p className="description-font">아이디/비밀번호 찾기</p>
        </Link>
      </div>
      <div className="search">
        <SearchBar
          label="우리 학교 커뮤니티 둘러보기"
          placeHolder="찾으시는 캠퍼스를 검색하세요"
          list={campusList}
          onUniChange={onUniChange}
        ></SearchBar>
      </div>
      <SearchList list={uniList} />
    </aside>
  );
};

export default Aside;
