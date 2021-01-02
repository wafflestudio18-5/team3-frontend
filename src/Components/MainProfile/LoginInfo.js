import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

import img_user from "../../Images/user.png";
function LoginInfo() {
  const history = useHistory();
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
      <div className="dgray18 center">Waffleytime</div> {/* 닉네임 */}
      <div className="lgray12 center">
        함태원{/* 이름 */}
        <br />
        wafflestudio{/* 아이디 */}
      </div>
      <ul className="mainprofile-buttonlist">
        <li>
          <Button
            size="xs"
            onClick={() => {
              history.push("/my");
            }}
          >
            내 정보
          </Button>
        </li>
        <li>
          <Button size="xs">로그아웃</Button>
        </li>
      </ul>
    </Box>
  );
}

export default LoginInfo;
