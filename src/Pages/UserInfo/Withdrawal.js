import { useState } from "react";
import { useHistory } from "react-router-dom";
import { MidWrapper, Input, Footer, NavBar } from "../../Components/";
import { deleteUser, loginUser } from "../../Api/UserApi";
import { useLoginContext } from "../../Context/LoginData";

const Withdrawal = () => {
  const history = useHistory();

  const [input, setInput] = useState("");

  const { user, logoutCookie } = useLoginContext();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const withdraw = () => {
    if (input.length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    loginUser({ username: user.username, password: input })
      .then(({ data }) => {
        logoutCookie();
        console.log(data.token);
        alert("정말로 탈퇴하시겠습니까?");
        deleteUser(data.token)
          .then(() => {
            history.push("/");
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        alert("비밀번호가 일치하지 않습니다.");
      });
  };
  return (
    <>
      <NavBar />
      <MidWrapper>
        <h1>회원 탈퇴</h1>
        <form className="register-info-form">
          <Input
            label="계정 비밀번호"
            placeholder="계정 비밀번호"
            maxLength="20"
            name="currPw"
            type="password"
            onChange={onChange}
            value={input}
            valid={0}
          />
        </form>
        <article className="gray-description-12">
          <p style={{ marginTop: "29px" }}>
            학교 인증 후 30일이 지나지 않은 경우, 다시 인증할 수 없습니다.
          </p>
          <p>와브리타임을 이용해주셔서 감사합니다.</p>
        </article>
        <button className="red-button" onClick={withdraw}>
          회원 탈퇴
        </button>
      </MidWrapper>
      <Footer page="my" />
    </>
  );
};

export default Withdrawal;
