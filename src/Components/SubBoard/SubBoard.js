import React, { useState, useEffect } from 'react';
import { Box, Link } from '@chakra-ui/react';

import { postHot } from '../../Api/PostApi';
import { useLoginContext } from '../../Context/LoginData';
import timePassed from '../../helpers/functions/time';
import './SubBoard.css';

function SubBoard() {
  const { user } = useLoginContext();
  const [Hot, setHot] = useState();

  useEffect(() => {
    postHot({ minLikes: 3 }, user.token)
      .then((response) => setHot(response.data.slice(-4)))
      .catch((err) => console.log(err));
  }, [user.token]);

  return (
    <aside className="aside-right">
      <article className="subboard-lg">
        <a href="/hotarticle">
          <div className="subboard-title">HOT 게시물</div>
        </a>
        {Hot
          ? Hot.map((post) => (
              <Link href={'/' + post.board_id + '/v/' + post.id} key={post.id}>
                <Box w="100%" h="38px" p="10px" borderTop="1px" borderColor="#e3e3e3">
                  <span className="gray14">{post.title}</span>
                  <time className="boardlist-time-right">{timePassed(post.created_at)}</time>
                </Box>
              </Link>
            ))
          : null}
      </article>
      <article className="subboard-sm">
        <a href="/bestarticle">
          <div className="subboard-title">BEST 게시판</div>
        </a>
      </article>
    </aside>
  );
}

export default SubBoard;
