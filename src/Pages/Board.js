import React from "react";

import NavBar from "../Components/NavBar/NavBar";
import Submenu from "../Components/Submenu/Submenu";
import BoardContent from "../Components/BoardContent/BoardContent";

import SubBoard from "../Components/SubBoard/SubBoard";

const BoardItem = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <BoardContent />
        <SubBoard />
      </div>
    </>
  );
};

export default BoardItem;
