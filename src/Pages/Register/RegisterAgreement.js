import React, { useState } from "react";
import { Checkbox, Container, Stack, Button } from "@chakra-ui/react";
import AgreementBox from "../../Components/Register/AgreementBox";
import { useTermContext } from "../../Context/TermData";

const RegisterAgreement = () => {
  const { terms, checkAll, checked, onCertificateClick } = useTermContext();

  const [check, setCheck] = useState(false);

  const renderedterms = () => {
    return terms.map((term, index) => {
      return (
        <AgreementBox
          term={term}
          checked={checked[index]}
          key={index}
          ind={index}
        />
      );
    });
  };

  return (
    <Container
      className="box-border"
      width="490px"
      p="20px"
      mt="20px"
      borderRadius="10px"
    >
      <h2 className="term-box-head-font mb-15">약관동의</h2>
      <Stack direction="column">
        <Checkbox
          size="sm"
          colorScheme="red"
          onChange={() => {
            check || checkAll();
            setCheck(!check);
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
        onClick={() => onCertificateClick(checked)}
      >
        회원 정보 입력
      </Button>
    </Container>
  );
};

export default RegisterAgreement;
