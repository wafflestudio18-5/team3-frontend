import React, { useState, useEffect } from 'react';
import { useLoginContext } from '../../Context/LoginData';
import { postList } from '../../Api/PostApi';
import { GridItem, Box, Link, Center, Button } from '@chakra-ui/react';

const Board = ({ board }) => {
  const { isLogined } = useLoginContext();

  const [Posts, setPosts] = useState();
  useEffect(() => {
    postList({
      board: +board.id,
      limit_num: 4,
      start_num: 0,
    })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((e) => console.log(e));
  }, [board]);

  return (
    <GridItem h="193px" border="1px" borderColor="#e3e3e3">
      <Box w="100%" h="40px" p="10px" borderBottom="1px" borderColor="#e3e3e3">
        <Link href={'/' + board.id}>
          <div className="boardlist-title">{board.title}</div>
        </Link>
      </Box>

      {!board.has_preview && !isLogined() ? (
        <Box w="100%" h="152px" p="40px 0">
          <p className="boardlist-hidden">
            로그인을 한 학생들만
            <br />
            이용할 수 있어요!
          </p>

          <Center>
            <Button color="white" backgroundColor="#c62917" size="xs">
              로그인
            </Button>
          </Center>
        </Box>
      ) : board.has_post_title ? (
        <>
          {Posts
            ? Posts.map((post) => (
                <Link href={'/' + board.id + '/v/' + post.id} key={post.id}>
                  <Box w="100%" h="38px" p="10px" borderBottom="1px" borderColor="#e3e3e3">
                    <span className="gray14">{post.title}</span>
                    <time className="boardlist-time-right">{'time'}</time>
                  </Box>
                </Link>
              ))
            : null}
        </>
      ) : (
        <>
          {Posts
            ? Posts.slice(-2).map((post) => (
                <Link to={'/' + board.id + '/v/' + post.id} key={post.id}>
                  <Box w="100%" h="76px" p="10px" borderBottom="1px" borderColor="#e3e3e3">
                    <div className="gray13 boardlist-content">{post.content}</div>
                    <time>{'time'}</time>
                    <ul className="boardlist-stat">
                      <li className="stat-like-s">{post.numLikes}</li>
                      <li className="stat-comment-s">{post.numComments}</li>
                    </ul>
                  </Box>
                </Link>
              ))
            : null}
        </>
      )}
    </GridItem>
  );
};

export default Board;
