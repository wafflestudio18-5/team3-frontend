import React, { useState } from "react";
import { Input, Stack, Button, Checkbox, HStack, Text } from "@chakra-ui/react";
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
      <HStack direction="row" spacing="130px">
        <Checkbox size="md" colorScheme="blue" defaultIsChecked>
          로그인 유지
        </Checkbox>
        <span>아이디/비밀번호 찾기</span>
      </HStack>
      <div align="center">
        <span>에브리타임에 처음이신가요?</span>
        <span> 회원가입 </span>
      </div>
    </Stack>
  );
}
