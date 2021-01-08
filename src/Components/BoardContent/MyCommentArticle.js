import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';

// import { useLoginContext } from '../../Context/LoginData';
import { postInfo } from '../../Api/PostApi';
import { commentMe } from '../../Api/CommentApi';
import PostItem from './PostItem';
import './BoardContent.css';

const MyCommentArticle = () => {
  // const { user } = useLoginContext();
  // const { pageId } = useParams();
  // const history = useHistory();

  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    commentMe({
      // limit_num: 20,
      // start_num: pageId ? (pageId - 1) * 20 : 0,
    })
      .then((response) => {
        let posts = [];
        response.data.foreach((comment) => {
          postInfo(comment.post_id).then((res) => posts.push(res.data));
        });
        setPosts(posts);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section>
      <Box w="778px" h="61px" p="15px" mb="5px" border="1px" borderColor="#e3e3e3">
        <h1>댓글 단 글</h1>
      </Box>

      <VStack w="778px" border="1px" borderColor="#e3e3e3" spacing="0">
        {Posts && Posts.length > 0 ? (
          Posts.map((post) => <PostItem key={post.id} boardId={post.board_id} post={post} />)
        ) : (
          <div className="boardcontent-nomore">첫 댓글을 남겨보세요!.</div>
        )}
      </VStack>

      {/* {pageId && pageId > 2 ? (
        <button className="boardcontent-button-first" onClick={() => history.push('/myarticle')}>
          처음
        </button>
      ) : null}

      {pageId && pageId > 1 ? (
        <button
          className="boardcontent-button-prev"
          onClick={() => history.push(`/myarticle/p/${+pageId - 1}`)}
        >
          이전
        </button>
      ) : null}

      {Posts && Posts.length !== 0 ? (
        <button
          className="boardcontent-button-next"
          onClick={() => history.push(`/myarticle/p/${pageId ? +pageId + 1 : 2}`)}
        >
          다음
        </button>
      ) : null} */}
    </section>
  );
};

export default MyCommentArticle;
