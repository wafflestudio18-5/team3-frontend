import React, { useState, useEffect } from "react";
import { Checkbox, Container, Stack, Button } from "@chakra-ui/react";
import AgreementBox from "../Components/Register/AgreementBox";
import terms from "../Contexts/terms";
const RegisterAgreement = () => {
  const [checkAll, setCheckAll] = useState(Array(terms.length + 1).fill(false));
  const onCheck = (n) => {
    setCheckAll(
      checkAll.map((item, index) => {
        if (index === n + 1 || (index === 0 && item)) return !item;
        return item;
      })
    );
  };

  const onCertificateClick = () => {
    let isAlert = false;
    checkAll.forEach((checked, ind) => {
      if (!checked && ind !== 0) isAlert = true;
    });
    if (isAlert) {
      alert("서비스 이용 약관에 동의해주세요");
      return;
    }
  };

  const renderedterms = () => {
    return terms.map((term, index) => {
      return (
        <AgreementBox
          checked={checkAll[index + 1]}
          term={term}
          onCheck={onCheck}
          key={index}
          ind={index}
        />
      );
    });
  };

  return (
    <Container className="box-border" p="20px" mt="20px" borderRadius="10px">
      <h2 className="term-box-head-font mb-15">약관동의</h2>
      <Stack direction="column">
        <Checkbox
          size="sm"
          colorScheme="red"
          isChecked={checkAll[0]}
          onClick={(e) => {
            e.preventDefault();
            setCheckAll(() => [...checkAll].fill(!checkAll[0]));
            console.log(checkAll[0]);
          }}
        >
          아래 약관에 모두 동의합니다.
        </Checkbox>
        {renderedterms()}
      </Stack>
      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        mb="10px"
        onClick={onCertificateClick}
      >
        휴대폰 인증
      </Button>
      <Button colorScheme="gray" variant="solid" width="100%">
        아이핀 인증
      </Button>
    </Container>
  );
};

export default RegisterAgreement;
