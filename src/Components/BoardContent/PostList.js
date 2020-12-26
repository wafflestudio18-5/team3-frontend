import React from "react";
import { VStack } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import PostItem from "./PostItem";

const PostList = ({ boardId }) => {
  const { boards } = useListContext();

  return (
    <VStack w="778px" border="1px" borderBottom="0" borderColor="#e3e3e3">
      {
        // TODO: 특정 페이지만 보이게 하기
        boards
          .find((board) => board.id === +boardId)
          .posts.map((post) => (
            <PostItem key={post.id} boardId={boardId} post={post} />
          ))
      }
    </VStack>
  );
};

export default PostList;
