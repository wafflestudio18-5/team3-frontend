// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

// import NavBar from "../Components/NavBar/NavBar";
// import Submenu from "../Components/Submenu/Submenu";

// import MainProfile from "../Components/MainProfile/MainProfile";
// import BoardList from "../Components/BoardList/BoardList";
// import SubBoard from "../Components/SubBoard/SubBoard";

// import NotLoginedMain from "../Components/NotLoginedMain/NotLoginedMain";

// const Main = () => {
//   const history = useHistory();

//   const [loginState, setLoginState] = useState(false);

//   useEffect(() => {
//     if (!checkLogin()) {
//       setLoginState(true);
//     }
//   }, []);

//   const checkLogin = () => {
//     if (localStorage.getItem("everytime-id")) {
//       return true;
//     }
//     return false;
//   };

//   const renderedMainPage = loginState ? (
//     <>
//       <NavBar />
//       <Submenu />
//       <div className="container">
//         <MainProfile />
//         <BoardList />
//         <SubBoard />
//       </div>
//     </>
//   ) : (
//     <NotLoginedMain />
//   );

//   return <>{renderedMainPage}</>;
// };

// export default Main;

import { LoginedMain } from "./";
import { NotLoginedMain } from "../Components/NotLoginedMain";
import { useState } from "react";
const Main = () => {
  const [login, setLogin] = useState(false);
  /* 로그인 구현 전까지 임시 버튼 */

  return (
    <>
      {login ? (
        <LoginedMain />
      ) : (
        <>
          <button
            onClick={() => setLogin(true)}
            style={{
              padding: "0 12px",
              borderRadius: "15px",
              lineHeight: "30px",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: "#c62917",
              position: "absolute",
              top: "50px",
              left: "10px",
            }}
          >
            메인 페이지로 입장하기
          </button>
          <NotLoginedMain />
        </>
      )}
    </>
  );
};

export default Main;
