import React from "react";

import NavBar from "../Components/NavBar/NavBar";
import Submenu from "../Components/Submenu/Submenu";
import BoardContent from "../Components/BoardContent/BoardContent";

const BoardItem = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <BoardContent />
    </>
  );
};

export default BoardItem;
