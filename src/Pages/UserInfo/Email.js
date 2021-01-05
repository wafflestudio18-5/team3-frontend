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

const Email = () => {
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
        <h1>이메일 변경</h1>
        <form className="register-info-form">
          <Input
            label="이메일"
            placeholder="이메일"
            name="email"
            onChange={onChange}
            warningMsg="올바른 이메일을 입력해주세요"
            value={email}
            valid={email.length && valid.email}
          />

          <Input
            label="계정 비밀번호"
            placeholder="계정 비밀번호"
            maxLength="20"
            name="currPw"
            type="password"
            onChange={onChange}
            value={currPw}
            valid={currPw.length}
          />
        </form>
        <article className="gray-description-12">
          <p style={{ marginTop: "29px" }}>
            반드시 본인의 이메일을 입력해주세요.
          </p>
          <p>
            계정 분실 시 아이디/비밀번호 찾기, 개인정보 관련 주요 고지사항 안내
            등에 사용됩니다.
          </p>
        </article>
        <button className="red-button" onClick={() => {}}>
          비밀번호 변경
        </button>
      </MidWrapper>
      <Footer page="my" />
    </>
  );
};

export default Email;
