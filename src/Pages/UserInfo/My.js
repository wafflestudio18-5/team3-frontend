import { InfoData, InfoWrapper } from "../../Components/UserInfo";
import NavBar from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer";
import UserImg from "../../Images/user.png";
import "./InfoPage.css";

const My = () => {
  const renderedContents = InfoData.map((section, index) => {
    return <InfoWrapper section={section} key={index}></InfoWrapper>;
  });

  return (
    <>
      <NavBar />
      <section className="my-wrap">
        <div className="light-border-wrapper my-info">
          <div className="flex-nowrap-space">
            <h2 className="info-header-font">내 정보</h2>
            <button onClick={() => {}}>로그아웃</button>
          </div>
          <div>
            <img src={UserImg} alt="userImg" />
            <div className="gray-description-12">
              {/* 수정 필요 */}
              <p>아이디</p>
              <p>이름/닉네임</p>
              <p>와플대 20학번</p>
            </div>
          </div>
        </div>
        {renderedContents}
      </section>
      <Footer page="my" />
    </>
  );
};

export default My;
