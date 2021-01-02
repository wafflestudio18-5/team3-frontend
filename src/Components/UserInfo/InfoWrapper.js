import React from "react";

const InfoWrapper = ({ header, contents }) => {
  const renderedContents = contents.map((i, index) => {
    return (
      <Link to={i.link} key={index}>
        {i.name}
      </Link>
    );
  });
  return (
    <article>
      <h1>header</h1>
      {renderedContents}
    </article>
  );
};

export default InfoWrapper;

const data = [
  {
    header: "계정",
    contents: [
      {
        name: "학교인증",
        link: "https://everytime.kr/auth",
      },
      {
        name: "비밀번호 변경",
        link: "https://everytime.kr/my/password",
      },
      {
        name: "이메일 변경",
        link: "https://everytime.kr/my/email",
      },
    ],
  },

  {
    header: "커뮤니티",
    contents: [
      {
        name: "낙네임 설정",
        link: "https://everytime.kr/auth",
      },
      {
        name: "이용 제한 내역",
        link: "https://everytime.kr/my/password",
      },
      {
        name: "게시판 관리",
        link: "https://everytime.kr/my/email",
      },
      {
        name: "커뮤니티 이용규칙",
        link: "https://everytime.kr/my/email",
      },
    ],
  },
  {
    header: "커뮤니티",
    contents: [
      {
        name: "문의하기",
        link: "https://everytime.kr/auth",
      },
      {
        name: "공지사항",
        link: "https://everytime.kr/my/password",
      },
      {
        name: "서비스 이용약관",
        link: "https://everytime.kr/my/email",
      },
      {
        name: "개인정보 처리방침",
        link: "https://everytime.kr/my/email",
      },
    ],
  },
  {
    header: "기타",
    contents: [
      {
        name: "정보 동의 설정",
        link: "https://everytime.kr/auth",
      },
      {
        name: "회원 탈퇴",
        link: "https://everytime.kr/my/password",
      },
    ],
  },
];
