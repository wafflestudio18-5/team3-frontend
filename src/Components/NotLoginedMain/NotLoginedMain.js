import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Aside, Footer } from "../";
import "./NotLoginedMainPage.css";
import CountUpFigure from "./CountUpFigure";
import { MobileAside } from "../Aside";
const figures = [
  {
    id: 0,
    number: [{ num: 457, unit: "만" }],
    description: "가입한 대학생",
  },
  {
    id: 1,
    number: [{ num: 2371, unit: "만" }],
    description: "만들어진 시간표",
  },
  {
    id: 2,
    number: [{ num: 272, unit: "만" }],
    description: " 강의평/시험정보",
  },
  { id: 3, number: [{ num: 130, unit: "만" }], description: "중고 거래된 책" },
  {
    id: 4,
    number: [
      { num: 8, unit: "억" },
      { num: 9279, unit: "만" },
    ],
    description: "작성된 게시물",
  },
];

const NotLoginedMain = () => {
  const activeImgDom0 = useRef();
  const activeImgDom1 = useRef();
  const activeImgDom2 = useRef();

  const [mobile, setMobile] = useState(false);

  const activeImgArr = useMemo(
    () => [activeImgDom0, activeImgDom1, activeImgDom2],
    []
  );

  const scrollCallback = useCallback(() => {
    for (let i = 0; i < 3; i++) {
      if (activeImgArr[i].current === null) continue;
      if (window.scrollY > 600 && activeImgArr[i].current) {
        activeImgArr[i].current.className = `NL-icon-box NL-active${i}`;
      } else activeImgArr[i].current.className = "NL-icon-box";
    }
  }, [activeImgArr]);

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback, false);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);

  const renderedFigure = figures.map((figure, index) => {
    return (
      <React.Fragment key={index}>
        {index ? <hr className="hr-vertical" /> : null}
        <CountUpFigure figure={figure} />
      </React.Fragment>
    );
  });

  const onMobileBtnClick = () => {
    setMobile(true);
  };

  return (
    <>
      {!mobile ? (
        <>
          <header className="mobile-header">
            <img
              src="https://everytime.kr/images/about/logo.png"
              alt="waverytime logo"
            />
            <button onClick={onMobileBtnClick}>모바일 웹 이용하기</button>
          </header>
          <section className="NL1 NL-box">
            <div className="phone">
              <div className="screen">
                <div className="img home"></div>
                <div className="img timetable"></div>
                <div className="img board"></div>
              </div>
            </div>
            <div className="NL1-headline">
              <p className="NL-head-black">동아리 생활을 더 편하고 즐겁게,</p>
              <p className="NL-head-red">와브리타임</p>
            </div>
            <div className="app-store">
              <a href="https://play.google.com/store?hl=ko">
                <img
                  src="https://everytime.kr/images/about/playstore.png"
                  className="NL-store-img"
                  alt="playstore"
                ></img>
              </a>
              <a href="https://play.google.com/store?hl=ko">
                <img
                  src="https://everytime.kr/images/about/appstore.png"
                  className="NL-store-img"
                  alt="appstore"
                ></img>
              </a>
            </div>
          </section>

          <section className="NL2 NL-box">
            <div className="NL2-head-box">
              <p className="NL-head-black">350만 대학생을 위한</p>
              <p className="NL-head-red NL2-head">
                국내 1위 대학생 서비스 와브리타임!
              </p>
            </div>
            <div className="NL-descript-font NL-descript-wrap">
              <p>
                시간표 작성, 수업 일정 및 할일 등 편리한{" "}
                <strong>학업 관리</strong>가 가능하고, 학식 등
              </p>
              <p>
                유용한<strong> 학교 생활 정보</strong>를 접할 수 있으며, 같은
                캠퍼스의 학생들과
              </p>
              <p>
                소통하는 <strong>익명 커뮤니티</strong>를 이용할 수 있습니다.
              </p>
            </div>
            <div className="NL-figure-wrap">{renderedFigure}</div>
          </section>

          <section className="NL3 NL-box">
            <div className="NL2-head-box">
              <p className="NL-head-black"> 전국 396개 캠퍼스 </p>
              <p className="NL-head-red NL2-head">
                재학생 커뮤니티 와브리타임!
              </p>
            </div>
            <div className="NL-descript-font NL-descript-wrap">
              <p>
                학교 인증을 거친 재학생들의 안전한 대화를 위한
                <strong>익명 시스템</strong>과 학생들이
              </p>
              <p>
                직접 게시판을 개설하여 운영하는 <strong>커뮤니티 플랫폼</strong>
                을 통해 많은 대학교에서
              </p>
              <p>가장 활발히 이용하는 재학생 커뮤니티로 자리잡았습니다.</p>
            </div>
            <div className="NL-icon-wrap">
              <div>
                <div className="NL-icon-box" ref={activeImgDom0}>
                  <img
                    src="https://everytime.kr/images/about/icon.authorized.png"
                    className="NL-icon-img"
                    alt="university certification"
                  ></img>
                </div>
                <p>철저한 학교 인증</p>
              </div>
              <div>
                <div className="NL-icon-box" ref={activeImgDom1}>
                  <img
                    src="https://everytime.kr/images/about/icon.authorized.png"
                    className="NL-icon-img"
                    alt="unonymous system"
                  ></img>
                </div>
                <p>철저한 익명 시스템</p>
              </div>
              <div>
                <div className="NL-icon-box" ref={activeImgDom2}>
                  <img
                    src="https://everytime.kr/images/about/icon.authorized.png"
                    className="NL-icon-img"
                    alt="board"
                  ></img>
                </div>
                <p>재학생 운영 게시판</p>
              </div>
            </div>
          </section>
          <Aside />
          <Footer page="NL" />
        </>
      ) : (
        <MobileAside />
      )}
    </>
  );
};

export default NotLoginedMain;
