import React from "react";
import { GridItem, Box, Link, Center, Button } from "@chakra-ui/react";

const Board = ({ board, hidden }) => {
  return (
    <GridItem h="192px" border="1px" borderColor="#e3e3e3">
      <Box w="100%" h="40px" p="10px" borderBottom="1px" borderColor="#e3e3e3">
        <Link href={"/" + board.id}>
          <div className="boardlist-title">{board.name}</div>
        </Link>
      </Box>

      {hidden ? ( // TODO: 로그인 안 되었을 때만 숨겨지도록 하기
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
      ) : board.title === true ? (
        <>
          {board.posts.slice(-4).map((post) => (
            <Link href={"/" + board.id + "/v/" + post.id} key={post.id}>
              <Box
                w="100%"
                h="38px"
                p="10px"
                borderBottom="1px"
                borderColor="#e3e3e3"
              >
                <span className="gray14">{post.title}</span>
                <time className="boardlist-time-right">{post.time}</time>
              </Box>
            </Link>
          ))}
        </>
      ) : (
        <>
          {board.posts.slice(-2).map((post) => (
            <Link to={"/" + board.id + "/v/" + post.id} key={post.id}>
              <Box
                w="100%"
                h="76px"
                p="10px"
                borderBottom="1px"
                borderColor="#e3e3e3"
              >
                <div className="gray13 boardlist-content">{post.content}</div>
                <time>{post.time}</time>
                <ul className="boardlist-stat">
                  <li className="stat-like-s">{post.likes}</li>
                  <li className="stat-comment-s">{post.comments.length}</li>
                </ul>
              </Box>
            </Link>
          ))}
        </>
      )}
    </GridItem>
  );
};

export default Board;
