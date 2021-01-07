import { MidWrapper, Input, checkFunctions, Footer } from "../../Components/";
import { useState } from "react";
import { NavBar } from "../../Components";
const defaultInput = {
  email: "",
  currPw: "",
};
const defaultValid = {
  email: 0,
  currPw: 0,
};

const Withdrawal = () => {
  const [input, setInput] = useState(defaultInput);
  const [valid, setValid] = useState(defaultValid);
  const { email, currPw } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    const cond = checkFunctions[`check${name}`](value);
    if (cond)
      setValid({
        ...valid,
        [name]: cond,
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
            value={currPw}
            valid={0}
          />
        </form>
        <article className="gray-description-12">
          <p style={{ marginTop: "29px" }}>
            학교 인증 후 30일이 지나지 않은 경우, 다시 인증할 수 없습니다.
          </p>
          <p>와브리타임을 이용해주셔서 감사합니다.</p>
        </article>
        <button className="red-button" onClick={() => {}}>
          회원 탈퇴
        </button>
      </MidWrapper>
      <Footer page="my" />
    </>
  );
};

export default Withdrawal;
