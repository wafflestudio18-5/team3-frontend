import React from "react";

import NavBar from "../Components/NavBar/NavBar";
import Submenu from "../Components/Submenu/Submenu";
import PostContent from "../Components/PostContent/PostContent";

import SubBoard from "../Components/SubBoard/SubBoard";

const Post = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <PostContent />
        <SubBoard />
      </div>
    </>
  );
};

export default Post;
