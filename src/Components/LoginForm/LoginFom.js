import React, { useState } from "react";
import { Input, Stack, Checkbox, HStack } from "@chakra-ui/react";
import { useLoginContext } from "../../Context/LoginData";

import { Link } from "react-router-dom";
import "./LoginForm.css";

const defaultInput = {
  username: "", // id
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(defaultInput);
  const { login } = useLoginContext();

  const onInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <Stack spacing={1} width="400px">
      <form target="iframe1">
        <Input
          size="md"
          placeholder="아이디"
          value={input.username}
          name="username"
          onChange={onInputChange}
        />
        <Input
          size="md"
          placeholder="비밀번호"
          value={input.password}
          name="password"
          type="password"
          className="password"
          onChange={onInputChange}
        />
        <button className="red-button2" onClick={() => login(input)}>
          로그인
        </button>
      </form>
      <HStack direction="row" spacing="145px">
        <Checkbox size="md" colorScheme="blue" defaultIsChecked>
          <label className="description-font">로그인 유지</label>
        </Checkbox>
        <span className="small-font">아이디/비밀번호 찾기</span>
      </HStack>
      <div align="center">
        <span className="description-font">에브리타임에 처음이신가요?</span>
        <Link to="/register" className="register-font">
          <span> 회원가입 </span>
        </Link>
      </div>
      <iframe
        title="nosubmit"
        id="iframe1"
        name="iframe1"
        style={{ display: "none" }}
      ></iframe>{" "}
    </Stack>
  );
}
