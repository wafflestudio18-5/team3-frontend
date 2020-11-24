import { Container, Select, Input, Button, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const yaerList = new Array(14).fill(2021);

const Register = () => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const renderedYear = yaerList.map((year, index) => (
    <option value={year}>{year - index}년</option>
  ));

  return (
    <Container borderWidth="1px" top="10">
      <Box fontWeight="semibold" fontSize="23px">
        에브리타임 회원가입
      </Box>
      <Box>
        <Text color="gray.500">
          에브리타임 계정으로{" "}
          <span style={{ fontWeight: "700", color: "black" }}>
            캠퍼스픽, 에브리타임
          </span>{" "}
          등 다양한 대학생 서비스를 모두 이용하실 수 있습니다.
        </Text>
      </Box>
      <Box fontWeight="semibold" fontSize="23px">
        학교선택
      </Box>
      <form>
        <label>입학년도</label>

        <Select placeholder="입학 연도 선택">{renderedYear}</Select>
        <label>학교</label>
        <Input
          size="md"
          placeHolder="학교 이름을 검색하세요."
          value={input}
          onChange={onInputChange}
        />
        <Button colorScheme="red" variant="solid" width="100%">
          다음
        </Button>
      </form>
    </Container>
  );
};

export default Register;
