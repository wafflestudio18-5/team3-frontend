import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import CommentList from "./CommentList";
import img_user from "../../Images/user.png";
import "./PostContent.css";

const PostContent = () => {
  const { boardId, postId } = useParams();
  const { boards } = useListContext();

  const post = boards
    .find((board) => board.id === +boardId)
    .posts.find((post) => post.id === +postId);

  return (
    <>
      <Box
        w="778px"
        h="61px"
        p="15px"
        mb="5px"
        border="1px"
        borderColor="#e3e3e3"
      >
        <h1>{boards.find((board) => board.id === +boardId).name}</h1>
      </Box>

      <Box w="778px" p="15px" border="1px" borderColor="#e3e3e3">
        <img className="img-user" src={img_user} alt="user" />
        <div className="postcontent-profile">
          <div className="black14b">익명{post.user_id}</div>
          <time>{post.time}</time>
        </div>

        {post.title ? <h2>{post.title}</h2> : null}
        <div className="gray14">{post.content}</div>
        <ul className="stat">
          <li className="stat-like">{post.likes}</li>
          <li className="stat-comment">{post.comments.length}</li>
          <li className="stat-star">{post.stars}</li>
        </ul>
        <br />
      </Box>

      <CommentList boardId={boardId} postId={postId} />
    </>
  );
};

export default PostContent;
