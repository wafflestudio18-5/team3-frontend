import { MidWrapper, Input, checkFunctions, Footer } from "../../Components/";
import { useState } from "react";
import { NavBar } from "../../Components";
const defaultInput = {
  password: "",
  samePw: "",
  currPw: "",
};
const defaultValid = {
  password: 0,
  samePw: 0,
  currPw: 0,
};

const Password = () => {
  const [input, setInput] = useState(defaultInput);
  const [valid, setValid] = useState(defaultValid);
  const { password, samePw, currPw } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    const cond = checkFunctions[`check${name}`](value, password);
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
        <h1>비밀번호 변경</h1>
        <form className="register-info-form">
          <Input
            label="새 비밀번호"
            placeholder="새 비밀번호"
            type="password"
            name="password"
            maxLength="20"
            onChange={onChange}
            warningMsg="4자 이상 입력하세요"
            subLabel="4~20자"
            value={password}
            valid={password.length && valid.password}
          />
          <Input
            placeholder="새 비밀번호 확인"
            name="samePw"
            type="password"
            maxLength="20"
            onChange={onChange}
            value={samePw}
            warningMsg="비밀번호가 일치하지 않습니다."
            valid={samePw.length && valid.samePw}
          />
          <Input
            label="현재 비밀번호"
            placeholder="현재 비밀번호"
            maxLength="20"
            name="currPw"
            type="password"
            onChange={onChange}
            value={currPw}
            valid={currPw.length}
          />
        </form>
        <button className="red-button" onClick={() => {}}>
          비밀번호 변경
        </button>
      </MidWrapper>
      <Footer page="my" />
    </>
  );
};

export default Password;
