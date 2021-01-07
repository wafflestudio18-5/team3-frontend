import { useState } from 'react';
import { MidWrapper, Input, checkFunctions, Footer, NavBar } from '../../Components/';
import { useLoginContext } from '../../Context/LoginData';
import { loginUser, checkUserProperty } from '../../Api/UserApi';

const defaultInput = {
  nickname: '',
  currPw: '',
};
const defaultValid = {
  nickname: '',
  currPw: '',
};

const Nickname = () => {
  const { user, updateUserInfo } = useLoginContext();
  const [input, setInput] = useState(defaultInput);
  const [valid, setValid] = useState(defaultValid);
  const { nickname, currPw } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    const cond = checkFunctions['checknickName'](value);
    if (name === 'nickname' && cond)
      setValid({
        ...valid,
        [name]: cond,
      });
  };

  const changeNickname = async () => {
    let userData;
    try {
      userData = await loginUser({ username: user.username, password: currPw });
    } catch (err) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      await checkUserProperty({ nickname });
      updateUserInfo({ nickname }, userData.data.token);
      alert('닉네임 변경이 완료되었습니다^^');
    } catch (err) {
      alert('이미 존재하는 닉네임입니다.');
      return;
    }
  };

  return (
    <>
      <NavBar />
      <MidWrapper>
        <h1>이메일 변경</h1>
        <form className="register-info-form" target="iframe1">
          <Input
            label="닉네임"
            placeholder="닉네임"
            name="nickname"
            onChange={onChange}
            warningMsg="올바른 닉네임을 입력해주세요"
            maxLength="7"
            subLabel="7자 이하"
            value={nickname}
            valid={nickname.length && valid.nickname}
          />

          <Input
            label="계정 비밀번호"
            placeholder="계정 비밀번호"
            maxLength="20"
            name="currPw"
            type="password"
            onChange={onChange}
            value={currPw}
            valid={currPw.length}
          />
          <article className="gray-description-12">
            <p style={{ marginTop: '29px' }}>아름다운 한국어를 사용해주세요</p>
            <p>불쾌한 닉네임의 경우 예고 없이 변경될 수 있습니다.</p>
          </article>
          <button className="red-button" onClick={changeNickname}>
            닉네임 변경
          </button>
        </form>
      </MidWrapper>
      <Footer page="my" />
      <iframe id="iframe1" name="iframe1" title="nosubmit" style={{ display: 'none' }} />
    </>
  );
};

export default Nickname;
