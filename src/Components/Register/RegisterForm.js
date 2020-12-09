import { Container, Select, Input, Button, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./registerForm.css";

const yaerList = new Array(14).fill(2021);

const RegisterForm = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const renderedYear = yaerList.map((year, index) => (
    <option value={year}>{year - index}년</option>
  ));

  return (
    <Container borderWidth="1px" mt="6" borderRadius="10px">
      <Box fontWeight="semibold" fontSize="23px" mt="7">
        에브리타임 회원가입
      </Box>
      <Box mt="3">
        <Text color="gray.500" fontSize="14px">
          에브리타임 계정으로{" "}
          <span style={{ fontWeight: "700", color: "black" }}>
            캠퍼스픽, 에브리타임
          </span>{" "}
          등 <br />
          다양한 대학생 서비스를 모두 이용하실 수 있습니다.
        </Text>
      </Box>
      <Box fontWeight="semibold" fontSize="23px" mt="10">
        학교선택
      </Box>
      <form style={{ marginTop: "16px" }}>
        <label className="label-font">입학년도</label>

        <Select placeholder="입학 연도 선택" mb="3">
          {renderedYear}
        </Select>

        <label className="label-font">학교</label>
        <Input
          size="md"
          placeHolder="학교 이름을 검색하세요."
          value={input}
          onChange={onInputChange}
        />
        <Link to="/register/agreement">
          <Button
            colorScheme="red"
            variant="solid"
            width="100%"
            mt="4"
            mb="4"
            onSubmit={() => {}}
          >
            다음
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default RegisterForm;
