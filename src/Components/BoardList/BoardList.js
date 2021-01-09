import React, { useState, useEffect } from 'react';
import { Grid } from '@chakra-ui/react';

import { boardList } from '../../Api/BoardApi';
import BoardItem from './BoardItem';
import './BoardList.css';
import ad_lg from '../../Images/Ad/ad_lg.png';

const visibleBoards = [1, 2, 3, 4, 5, 6];

const BoardList = () => {
  const [Boards, setBoards] = useState();

  useEffect(() => {
    boardList().then((response) => setBoards(response.data));
  }, []);

  return (
    <section>
      <a href="https://everytime.kr">
        <img className="ad_lg" src={ad_lg} alt="Ad" />
      </a>
      {Boards ? (
        <Grid mt="15px" maxW="600px" templateColumns="repeat(2, 1fr)" gap="5px">
          {visibleBoards.map((id) => (
            <BoardItem key={id} board={Boards.find((board) => board.id === id)} />
          ))}
        </Grid>
      ) : null}
    </section>
  );
};

export default BoardList;
