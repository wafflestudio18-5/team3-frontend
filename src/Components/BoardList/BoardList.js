import React from "react";
import { Grid } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import BoardItem from "./BoardItem";
import "./BoardList.css";

const BoardList = () => {
  const { boards, visibleBoards } = useListContext();

  return (
    <Grid maxW="595px" templateColumns="repeat(2, 1fr)" gap="5px">
      {visibleBoards.map((item) => (
        <BoardItem
          key={item.id}
          board={boards.find((board) => board.id === item.id)}
          hidden={item.hidden}
        />
      ))}
    </Grid>
  );
};

export default BoardList;
