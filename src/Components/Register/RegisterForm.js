import { Container, Select, Input, Button, Box, Text } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import "./registerForm.css";
import { UniMatchedList } from "./";
import { useRegisterContext } from "../../Context/RegisterData";
import { useHistory } from "react-router-dom";
const yaerList = new Array(14).fill(2021);

const defaultInput = {
  year: -1,
  university: "",
};

const RegisterForm = () => {
  const [input, setInput] = useState(defaultInput);
  const [searchUni, setSearchUni] = useState("");
  const ref = useRef();
  const history = useHistory();
  const { setUniYear } = useRegisterContext();

  const { year, university } = input;

  const onYearClick = () => {
    setInput({
      ...input,
      year: ref.current.options[ref.current.selectedIndex].value,
    });
    setUniYear({
      ...input,
      year: Number(ref.current.options[ref.current.selectedIndex].value),
    });
  };

  const setUniversity = (university) => {
    setInput({ ...input, university });
    setSearchUni(university);
    setUniYear({
      ...input,
      university,
    });
  };

  const checkFormFulfilled = () => {
    if (year === -1) {
      alert("입학 연도를 선택해주세요");
      return false;
    } else if (!university.length) {
      alert("대학을 선택해주세요");
      return false;
    } else return true;
  };

  const resetUni = () => {
    setInput({ ...input, university: "" });
    setSearchUni("");
  };
  const renderedYear = yaerList.map((year, index) => (
    <option value={year} key={index}>
      {year - index}년
    </option>
  ));

  return (
    <Container borderWidth="1px" mt="6" borderRadius="10px">
      <Box fontWeight="semibold" fontSize="23px" mt="7">
        에브리타임 회원가입
      </Box>
      <Box mt="3">
        <Text color="gray.500" fontSize="14px">
          에브리타임 계정으로
          <span style={{ fontWeight: "700", color: "black" }}>
            캠퍼스픽, 에브리타임
          </span>
          등 <br />
          다양한 대학생 서비스를 모두 이용하실 수 있습니다.
        </Text>
      </Box>
      <Box fontWeight="semibold" fontSize="23px" mt="10">
        학교선택
      </Box>
      <div style={{ marginTop: "16px" }}>
        <label className="label-font">입학년도</label>

        {/* select의 option을 선택할 때는 onChange로 넘겨주어야 한다. */}
        <Select
          placeholder="연도 선택(학번)"
          mb="3"
          onChange={onYearClick}
          ref={ref}
        >
          {renderedYear}
        </Select>

        <label className="label-font">학교</label>
        <Input
          size="md"
          placeholder="학교 이름을 검색하세요."
          value={university.length ? university : searchUni}
          name="university"
          onChange={(e) => setSearchUni(e.target.value)}
          onClick={resetUni}
          autoComplete="off"
        />
        <UniMatchedList name={searchUni} onUniSet={setUniversity} />

        <Button
          colorScheme="red"
          variant="solid"
          width="100%"
          mt="4"
          mb="4"
          onClick={() => {
            if (checkFormFulfilled()) {
              history.push("/register/agreement");
            }
          }}
        >
          다음
        </Button>
      </div>
    </Container>
  );
};

export default RegisterForm;
