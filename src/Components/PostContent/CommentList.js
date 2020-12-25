import React from "react";
import { VStack } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import CommentItem from "./CommentItem";

const CommentList = ({ boardId, postId }) => {
  const { boards } = useListContext();

  return (
    <VStack w="778px" border="1px" borderColor="#e3e3e3">
      {boards
        .find((board) => board.id === +boardId)
        .posts.find((post) => post.id === +postId)
        .comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
    </VStack>
  );
};

export default CommentList;
