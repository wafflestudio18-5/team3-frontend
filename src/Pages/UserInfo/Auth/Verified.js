import { useEffect } from 'react';
import { useLoginContext } from '../../../Context/LoginData';
const Verified = () => {
  const { userVerified } = useLoginContext();

  useEffect(() => {
    userVerified();
    alert('인증이 완료되었습니다.');
    window.location.href = '/';
  }, []);
  return <div></div>;
};

export default Verified;
