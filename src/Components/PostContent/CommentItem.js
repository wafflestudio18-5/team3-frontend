import React from "react";
import { Box } from "@chakra-ui/react";

import img_user from "../../Images/user.png";

const CommentItem = ({ comment }) => {
  return (
    <Box w="100%" p="15px" borderBottom="1px" borderColor="#e3e3e3">
      <img className="img-user-s" src={img_user} alt="user" />
      <span className="black12b"> {comment.user_id}</span>
      <div className="gray14">{comment.content}</div>
      <time>{comment.time}</time>
    </Box>
  );
};

export default CommentItem;
