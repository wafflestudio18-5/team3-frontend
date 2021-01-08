import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import { postList } from '../../Api/PostApi';
import PostItem from './PostItem';

const PostList = ({ boardId, pageId }) => {
  const history = useHistory();
  const [Posts, setPosts] = useState();

  useEffect(() => {
    postList({
      board: +boardId,
      limit_num: 20,
      start_num: (pageId - 1) * 20,
    })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((e) => console.log(e));
  }, [boardId, pageId]);

  return (
    <>
      <VStack w="778px" border="1px" borderColor="#e3e3e3">
        {Posts && Posts.length > 0 ? (
          Posts.map((post) => <PostItem key={post.id} boardId={boardId} post={post} />)
        ) : (
          <div className="boardcontent-nomore">더 이상 글이 없습니다.</div>
        )}
      </VStack>
      {pageId > 1 ? (
        <>
          <button className="boardcontent-button-first" onClick={() => history.push(`/${boardId}`)}>
            처음
          </button>
          <button
            className="boardcontent-button-prev"
            onClick={() => history.push(`/${boardId}/p/${+pageId - 1}`)}
          >
            이전
          </button>
        </>
      ) : null}

      {Posts && Posts.length !== 0 ? (
        <button
          className="boardcontent-button-next"
          onClick={() => history.push(`/${boardId}/p/${+pageId + 1}`)}
        >
          다음
        </button>
      ) : null}
    </>
  );
};

export default PostList;
