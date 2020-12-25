import React from "react";
import { Link, Box } from "@chakra-ui/react";

import img_user from "../../Images/user.png";

const PostItem = ({ boardId, post }) => {
  return (
    <Link href={"/" + boardId + "/v/" + post.id} w="100%">
      {post.title ? (
        <Box
          w="100%"
          h="93px"
          p="15px"
          borderBottom="1px"
          borderColor="#e3e3e3"
        >
          <div className="black14">{post.title}</div>
          <div className="lgray12">{post.content}</div>
          <time>{post.time}</time>
          <span>{post.user_id}</span>
          <ul className="stat">
            <li className="stat-like">{post.likes}</li>
            <li className="stat-comment">{post.comments.length}</li>
          </ul>
        </Box>
      ) : (
        <Box w="100%" p="15px" borderBottom="1px" borderColor="#e3e3e3">
          <img className="img-user-s" src={img_user} alt="user" />
          <span className="black12b">익명{post.user_id}</span>
          <time>{post.time}</time>
          <p className="gray14">{post.content}</p>
          <ul className="stat">
            <li className="stat-like">{post.likes}</li>
            <li className="stat-comment">{post.comments.length}</li>
          </ul>
          <br />
        </Box>
      )}
    </Link>
  );
};

export default PostItem;
