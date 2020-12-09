import React from "react";
import { Flex, Center, Box, Text, Square } from "@chakra-ui/react";
import Aside from "../Aside/Aside";
import "./NotLoginedMainPage.css";
const NotLoginedMain = () => {
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
        <div>350만 대학생을 위한 국내 1위 대학생 서비스 에브리타임!</div>
        <div>
          시간표 작성, 수업 일정 및 할일 등 편리한 학업 관리가 가능하고, 학식 등
          유용한 학교 생활 정보를 접할 수 있으며, 같은 캠퍼스의 학생들과
          소통하는 익명 커뮤니티를 이용할 수 있습니다.
        </div>
        <div>
          <div></div>
          <hr />
          <div></div>
          <hr />
          <div></div>
          <hr />
          <div></div>
          <hr />
          <div></div>
        </div>
      </section>
      <section className="NL3 NL-box">
        <div>전국 396개 캠퍼스 재학생 커뮤니티 에브리타임!</div>
        <div>
          학교 인증을 거친 재학생들의 안전한 대화를 위한 익명 시스템과 학생들이
          직접 게시판을 개설하여 운영하는 커뮤니티 플랫폼을 통해 많은 대학교에서
          가장 활발히 이용하는 재학생 커뮤니티로 자리잡았습니다.
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <Aside />
    </>
  );
};

export default NotLoginedMain;
