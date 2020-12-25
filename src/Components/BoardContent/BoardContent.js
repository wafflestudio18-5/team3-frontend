import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import PostList from "./PostList";

const BoardContent = () => {
  const { boardId } = useParams();
  const { boards } = useListContext();

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
      {/* TODO: 입력란 */}
      <PostList boardId={boardId} />
    </>
  );
};

export default BoardContent;
