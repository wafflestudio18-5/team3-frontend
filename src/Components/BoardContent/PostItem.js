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
          <time>{"time"}</time>
          <span className="black11">
            {post.is_anonym ? "익명" : "유저" + post.user_id}
          </span>
          <ul className="stat">
            <li className="stat-like">{post.numLikes}</li>
            <li className="stat-comment">{post.numComments}</li>
          </ul>
        </Box>
      ) : (
        <Box w="100%" p="15px" borderBottom="1px" borderColor="#e3e3e3">
          <img className="img-user-s" src={img_user} alt="user" />
          <span className="black12b">
            {post.is_anonym ? "익명" : "유저" + post.user_id}
          </span>
          <time>{"time"}</time>
          <p className="gray14">{post.content}</p>
          <ul className="stat">
            <li className="stat-like">{post.numLikes}</li>
            <li className="stat-comment">{post.numComments}</li>
          </ul>
          <br />
        </Box>
      )}
    </Link>
  );
};

export default PostItem;
