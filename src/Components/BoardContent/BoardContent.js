import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import PostList from "./PostList";
import "./BoardContent.css";

const BoardContent = () => {
  const { boardId } = useParams();
  const { boards } = useListContext();

  const [WritePost, setWritePost] = useState(false);

  const onClickWrite = () => {
    setWritePost(true);
  };

  return (
    <section>
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

      {WritePost ? (
        <></>
      ) : (
        <button className="boardcontent-write" onClick={onClickWrite}>
          새 글을 작성해주세요!
        </button>
      )}
      <PostList boardId={boardId} />
    </section>
  );
};

export default BoardContent;
