import React from "react";
import { Grid } from "@chakra-ui/react";

import { useListContext } from "../../Context/BoardList";
import BoardItem from "./BoardItem";
import "./BoardList.css";
import ad_lg from "../../Images/Ad/ad_lg.png";

const BoardList = () => {
  const { boards, visibleBoards } = useListContext();

  return (
    <section>
      <a href="https://everytime.kr">
        <img className="ad_lg" src={ad_lg} alt="Ad" />
      </a>
      <Grid mt="15px" maxW="600px" templateColumns="repeat(2, 1fr)" gap="5px">
        {visibleBoards.map((item) => (
          <BoardItem
            key={item.id}
            board={boards.find((board) => board.id === item.id)}
            hidden={item.hidden}
          />
        ))}
      </Grid>
    </section>
  );
};

export default BoardList;
