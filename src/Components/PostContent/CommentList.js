import React, { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';

import { commentList } from '../../Api/CommentApi';
import CommentItem from './CommentItem';

const comments = { id: 1, user_id: 2, nickname: 'ㅎㅇ', post_id: 1, content: 'ㅎㅇㅎㅇ' };

const CommentList = ({ postId }) => {
  const [Comments, setComments] = useState();

  useEffect(() => {
    commentList({
      post: +postId,
    })
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((e) => console.log(e));
  }, [postId]);

  return (
    <VStack w="778px" border="1px" borderTop="0" borderBottom="0" borderColor="#e3e3e3">
      {Comments
        ? Comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
        : null}
    </VStack>
  );
};

export default CommentList;
