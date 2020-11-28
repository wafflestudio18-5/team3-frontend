import React, { useState } from "react";
import { Input, Stack, Button, Checkbox, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const defaultInput = {
  id: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(defaultInput);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Stack spacing={1} width="400px">
      <Input
        size="md"
        placeHolder="아이디"
        value={input.id}
        onChange={onInputChange}
      />
      <Input
        size="md"
        placeHolder="비밀번호"
        value={input.password}
        onChange={onInputChange}
      />
      <Button colorScheme="red" variant="solid">
        로그인
      </Button>
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
    </Stack>
  );
}
