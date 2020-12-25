import React from "react";
import { Box } from "@chakra-ui/react";

import img_posts from "../../Images/posts.png";
import img_comment from "../../Images/comment.png";
import img_star from "../../Images/star.png";

function MyPosts() {
  return (
    <Box
      mb="6px"
      border="1px solid #d6d6d6"
      bgColor="#f9f9f9"
      w="173px"
      h="124px"
    >
      <a href="/">
        <div className="mainprofile-menu">
          <img className="mainprofile-icon" src={img_posts} alt="posts" />
          내가 쓴 글
        </div>
      </a>
      <a href="/">
        <div className="mainprofile-menu">
          <img className="mainprofile-icon" src={img_comment} alt="comment" />
          댓글 단 글
        </div>
      </a>
      <a href="/">
        <div className="mainprofile-menu">
          <img className="mainprofile-icon" src={img_star} alt="star" />내
          스크랩
        </div>
      </a>
    </Box>
  );
}

export default MyPosts;
