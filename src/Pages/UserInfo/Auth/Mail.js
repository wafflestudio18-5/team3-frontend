import { useState } from 'react';
import { useLoginContext } from '../../../Context/LoginData';
import { MidWrapper, NavBar, Footer, Input, checkFunctions } from '../../../Components/';

const Mail = () => {
  const [input, setInput] = useState('');
  const { user, emailAuth } = useLoginContext();
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const validCallback = () => {
    switch (checkFunctions.checkemail(input)) {
      case 0:
        return 0;
      case -1:
        return -1;
      default:
        if (input.split('@')[1] !== 'snu.ac.kr') return -1;
        else return 1;
    }
  };

  return (
    <>
      <NavBar />
      <MidWrapper>
        <h1>이메일을 입력하세요</h1>
        <Input
          placeholder="~~@snu.ac.kr"
          type="custom-input"
          warningMsg="올바른 서울대학교 이메일 주소를 입력하세요"
          onChange={onChange}
          value={input}
          valid={validCallback()}
        ></Input>
        <button
          className="red-button"
          onClick={() => {
            if (validCallback()) emailAuth({ email: input }, user.token);
            else alert('올바른 비밀번호를 입력해주세요');
          }}
        >
          인증 메일 보내기
        </button>
      </MidWrapper>
      <Footer page="my" />
    </>
  );
};

export default Mail;
