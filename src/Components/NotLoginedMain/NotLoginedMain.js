import React, { useEffect } from "react";
import { Flex, Center, Box, Text, Square } from "@chakra-ui/react";
import Aside from "../Aside/Aside";
import "./NotLoginedMainPage.css";

const figures = [
  {
    number: [{ num: 457, unit: "만" }],
    description: "가입한 대학생",
  },
  {
    number: [{ num: 2371, unit: "만" }],
    description: "만들어진 시간표",
  },
  {
    number: [{ num: 272, unit: "만" }],
    description: " 강의평/시험정보",
  },
  {
    number: [{ num: 130, unit: "만" }],
    description: "중고 거래된 책",
  },
  {
    number: [
      { num: 8, unit: "억" },
      { num: 9279, unit: "만" },
    ],
    description: "작성된 게시물",
  },
];

const NotLoginedMain = () => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const renderedFigure = figures.map((figure, index) => {
    const { number, description } = figure;
    return (
      <>
        {index ? <hr className="hr-vertical" /> : null}
        <div className="NL-figure-box">
          <p className="NL-head-black">
            {number.map((i) => (
              <>
                {i.num} <span>{i.unit}</span>
              </>
            ))}
          </p>
          <p>{description}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <section className="NL1 NL-box">
        <div className="phone">
          <div className="screen">
            <div className="img home"></div>
            <div className="img timetable"></div>
            <div className="img board"></div>
          </div>
        </div>
        <div className="NL1-headline">
          <p className="NL-head-black">대학 생활을 더 편하고 즐겁게,</p>
          <p className="NL-head-red">에브리타임</p>
        </div>
        <div className="app-store">
          <a>
            <img
              src="https://everytime.kr/images/about/playstore.png"
              className="NL-store-img"
            ></img>
          </a>
          <a>
            <img
              src="https://everytime.kr/images/about/appstore.png"
              className="NL-store-img"
            ></img>
          </a>
        </div>
      </section>

      <section className="NL2 NL-box">
        <div className="NL2-head-box">
          <p className="NL-head-black">350만 대학생을 위한</p>
          <p className="NL-head-red NL2-head">
            국내 1위 대학생 서비스 에브리타임!
          </p>
        </div>
        <div className="NL-descript-font NL-descript-wrap">
          <p>
            시간표 작성, 수업 일정 및 할일 등 편리한 학업 관리가 가능하고, 학식
            등
          </p>
          <p>유용한 학교 생활 정보를 접할 수 있으며, 같은 캠퍼스의 학생들과</p>
          <p>소통하는 익명 커뮤니티를 이용할 수 있습니다.</p>
        </div>
        <div className="NL-figure-wrap">{renderedFigure}</div>
      </section>

      <section className="NL3 NL-box">
        <div className="NL2-head-box">
          <p className="NL-head-black"> 전국 396개 캠퍼스 </p>
          <p className="NL-head-red NL2-head">재학생 커뮤니티 에브리타임!</p>
        </div>
        <div className="NL-descript-font NL-descript-wrap">
          <p>
            학교 인증을 거친 재학생들의 안전한 대화를 위한 익명 시스템과
            학생들이
          </p>
          <p>
            직접 게시판을 개설하여 운영하는 커뮤니티 플랫폼을 통해 많은
            대학교에서
          </p>
          <p>가장 활발히 이용하는 재학생 커뮤니티로 자리잡았습니다.</p>
        </div>
        <div className="NL-icon-wrap">
          <div>
            <div className="NL-icon-box">
              <img
                src="https://everytime.kr/images/about/icon.authorized.png"
                className="NL-icon-img"
              ></img>
            </div>
            <p>철저한 학교 인증</p>
          </div>
          <div>
            <div className="NL-icon-box">
              <img
                src="https://everytime.kr/images/about/icon.authorized.png"
                className="NL-icon-img"
              ></img>
            </div>
            <p>철저한 학교 인증</p>
          </div>
          <div>
            <div className="NL-icon-box">
              <img
                src="https://everytime.kr/images/about/icon.authorized.png"
                className="NL-icon-img"
              ></img>
            </div>
            <p>철저한 학교 인증</p>
          </div>
        </div>
      </section>

      <Aside />
    </>
  );
};

export default NotLoginedMain;
