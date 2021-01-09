import React from 'react';
import { Box } from '@chakra-ui/react';

import { useLoginContext } from '../../Context/LoginData';
import timePassed from '../../helpers/functions/time';
import img_user from '../../Images/user.png';

const ReplyItem = ({ reply, onClickDelete, onClickLike }) => {
  const { user } = useLoginContext();
  return (
    <Box w="100%" p="15px 15px 4px 15px" borderBottom="1px" borderColor="#e3e3e3">
      <img className="img-user-s" src={img_user} alt="user" />
      <span className={reply.user_id === user.id ? 'cyan12b' : 'black12b'}>
        {reply.is_anonym ? '익명' : reply.nickname}
      </span>
      <div className="postcontent-status">
        <button onClick={() => onClickLike(reply.id)}>공감</button>
        {reply.user_id === user.id ? (
          <button onClick={() => onClickDelete(reply.id)}>삭제</button>
        ) : null}
      </div>
      <div className="gray14">{reply.content}</div>
      <time className="time12">{timePassed(reply.created_at)}</time>
      {reply.numLikes > 0 ? (
        <button className="stat-like" onClick={() => onClickLike(reply.id)}>
          {reply.numLikes}
        </button>
      ) : null}
    </Box>
  );
};

export default ReplyItem;
