import { InfoData, InfoWrapper } from '../../Components/UserInfo';
import { Footer, NavBar } from '../../Components/';
import UserImg from '../../Images/user.png';
import { useLoginContext } from '../../Context/LoginData';

import './InfoPage.css';

const My = () => {
  const { user, logout } = useLoginContext();
  const { username, nickname, year, last_name, university } = user;
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
            <button onClick={() => logout(user.token)}>로그아웃</button>
          </div>
          <div>
            <img src={UserImg} alt="userImg" />
            <div className="gray-description-12">
              {/* 수정 필요 */}
              <p>{username}</p>
              <p>
                {last_name}/{nickname}
              </p>
              <p>
                {university} {year % 100}학번
              </p>
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
