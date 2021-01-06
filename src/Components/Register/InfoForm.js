import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import "./InfoForm.css";
import { checkFunctions, defaultValid } from "./CheckFunctions";
import { useRegisterContext } from "../../Context/RegisterData";

const defaultInput = {
  user_id: "",
  userName: "",
  password: "",
  samePw: "",
  email: "",
  nickName: "",
};

const InfoForm = () => {
  const [input, setInput] = useState(defaultInput);
  const [validList, setValidList] = useState(defaultValid);
  const { user_id, userName, password, samePw, email, nickName } = input;

  const { setUserInfo } = useRegisterContext();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    const cond = checkFunctions[`check${name}`](value, password);
    if (cond)
      setValidList({
        ...validList,
        [name]: cond,
      });
  };

  const checkAllInputValid = (input) => {
    for (let key of Object.keys(input))
      if (checkFunctions[`check${key}`](input[key], password) <= 0) {
        alert("모든 정보를 바르게 입력해주세요");
        return false;
      }
    return true;
  };

  const setIcon = (x) => {
    if (x === 0) return null;
    if (x === 1) return "correct";
    if (x < 0) return "error";
  };

  return (
    <Container
      borderWidth="1px"
      mt="6"
      borderRadius="10px"
      className="text-drag-disable"
      p="18px"
    >
      <h2>회원 정보</h2>
      <form className="register-info-form" autoComplete="off" target="iframe1">
        <div>
          <label>이름</label>
          <input
            placeholder="이름"
            value={userName}
            name="userName"
            onChange={onInputChange}
            maxLength="6"
            className={setIcon(validList.userName)}
          ></input>
          {validList.userName < 0 ? <p>2자 이상 입력하세요</p> : null}
        </div>
        <div>
          <label>아이디</label>
          <span>영문,숫자,4~20자</span>
          <input
            placeholder="아이디"
            value={user_id}
            name="user_id"
            onChange={onInputChange}
            className={setIcon(validList.user_id)}
            maxLength="20"
          ></input>
          {validList.user_id < 0 ? (
            validList.user_id === -1 ? (
              <p>4자 이상 입력하세요</p>
            ) : (
              <p>영문,숫자만 입력하세요</p>
            )
          ) : null}
        </div>
        <div>
          <label>비밀번호</label>
          <span>4~20자</span>
          <input
            placeholder="비밀번호"
            value={password}
            name="password"
            onChange={onInputChange}
            maxLength="20"
            type="password"
            className={"password " + setIcon(validList.password)}
          ></input>
          {validList.password < 0 ? <p>4자 이상 입력하세요</p> : null}

          <input
            placeholder="비밀번호 확인"
            value={samePw}
            name="samePw"
            type="password"
            maxLength="20"
            onChange={onInputChange}
            className={"password " + setIcon(validList.samePw)}
          ></input>
          {validList.samePw < 0 ? <p>비밀번호가 일치하지 않습니다.</p> : null}
        </div>
        <div>
          <label>이메일</label>
          <span>아이디/비밀번호 찾기에 필요</span>
          <input
            placeholder="이메일"
            value={email}
            name="email"
            onChange={onInputChange}
            className={setIcon(validList.email)}
          ></input>
          {validList.email < 0 ? <p>올바른 이메일을 입력하세요</p> : null}
        </div>
        <div>
          <label>닉네임</label>
          <span>커뮤니티 활동에 필요</span>
          <input
            placeholder="닉네임"
            value={nickName}
            name="nickName"
            onChange={onInputChange}
            maxLength="8"
            className={setIcon(validList.nickName)}
          ></input>
          {validList.nickName < 0 ? <p>2자 이상 입력하세요</p> : null}
        </div>
        <button
          className="red-button"
          onClick={() => {
            if (checkAllInputValid(input)) {
              setUserInfo(input);
            }
          }}
        >
          회원가입
        </button>
      </form>
      <iframe
        title="nosubmit"
        id="iframe1"
        name="iframe1"
        style={{ display: "none" }}
      ></iframe>
    </Container>
  );
};
export default InfoForm;
