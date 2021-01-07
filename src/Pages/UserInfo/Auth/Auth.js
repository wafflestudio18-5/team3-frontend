import { AuthWrapper, Footer, NavBar } from "../../../Components/";

const authContents = {
  header: "인증 방식 선택",
  contents: [
    {
      AuthName: "합격자 인증",
      description:
        "새내기 게시판만 이용 가능하며,\n 합격 증명 자료를 통해 인증",
      link: "",
    },
    {
      AuthName: "재학생 인증",
      description:
        "게시판, 캠퍼스픽 등 모든 커뮤니티 이용이 가능하며,\n 재학 증명 자료를 통해 인증",
      link: "/my/auth/mail",
    },
    {
      AuthName: "졸업생 인증",
      description:
        "게시판,캠퍼스픽 등 모든 커뮤니티 이용이 가능하며, \n졸업 증명 자료를 통해 인증",
      link: "",
    },
  ],
};
const Auth = () => {
  return (
    <>
      <NavBar />
      <AuthWrapper section={authContents} />
      <Footer page="my" />
    </>
  );
};

export default Auth;
