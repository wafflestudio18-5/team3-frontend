import React, { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';

import { commentList } from '../../Api/CommentApi';
import CommentItem from './CommentItem';

const CommentList = ({ postId, newComment }) => {
  const [Comments, setComments] = useState([]);
  const [changeOn, setChangeOn] = useState(false);

  const commentChanged = () => {
    setChangeOn(true);
  };

  useEffect(() => {
    commentList({
      post: +postId,
    })
      .then((response) => {
        setComments(response.data);
      })
      .catch((e) => console.log(e));
    setChangeOn(false);
  }, [postId, changeOn, newComment]);

  return (
    <VStack w="778px" border="1px" borderTop="0" borderBottom="0" borderColor="#e3e3e3" spacing="0">
      {Comments
        ? Comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onChange={commentChanged} />
          ))
        : null}
    </VStack>
  );
};

export default CommentList;
