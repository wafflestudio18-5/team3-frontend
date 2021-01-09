import React from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useLoginContext } from "../../Context/LoginData";

import img_user from "../../Images/user.png";
function LoginInfo() {
  const history = useHistory();

  const { user, logoutCookie, isLogined } = useLoginContext();
  const { nickname, last_name, username } = user;
  console.log(isLogined());

  return (
    <Box
      w="173px"
      h="217px"
      p="15px"
      mb="5px"
      border="1px solid #d6d6d6"
      bgColor="#f9f9f9"
    >
      <img className="img-user-l" src={img_user} alt="user" />
      <div className="dgray18b center">{nickname}</div>
      <div className="lgray12 center">
        {last_name}
        <br />
        {username}
      </div>
      <ul className="mainprofile-buttonlist">
        <li>
          <button
            className="mainprofile-button"
            onClick={() => {
              history.push("/my");
            }}
          >
            내 정보
          </button>
        </li>
        <li>
          <button
            className="mainprofile-button"
            onClick={() => {
              logoutCookie();
              history.push("/");
            }}
          >
            로그아웃
          </button>
        </li>
      </ul>
    </Box>
  );
}

export default LoginInfo;
