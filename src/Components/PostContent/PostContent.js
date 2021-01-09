import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { boardList } from '../../Api/BoardApi';
import { postInfo } from '../../Api/PostApi';
import { commentWrite } from '../../Api/CommentApi';
import { useLoginContext } from '../../Context/LoginData';
import CommentList from './CommentList';
import timePassed from '../../helpers/functions/time';
import img_user from '../../Images/user.png';
import './PostContent.css';

const defaultBoard = {
  created_at: '',
  user_id: 0,
  content: '',
  numLikes: 0,
  numComments: 0,
  numScraps: 0,
  title: '',
};

const PostContent = () => {
  const { user } = useLoginContext();
  const { boardId, postId } = useParams();

  const [Board, setBoard] = useState(defaultBoard);
  const [Post, setPost] = useState();

  const [commentOn, setCommentOn] = useState(false);

  useEffect(() => {
    setCommentOn(false);
    boardList().then((response) => {
      const board = response.data.find((board) => board.id === +boardId);
      setBoard(board);
    });

    postInfo(postId)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, [boardId, postId, commentOn]);

  const [Comment, setComment] = useState({
    post: postId,
    content: '',
    is_anonym: false,
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setComment({
      ...Comment,
      [name]: value,
    });
  };

  const onClickAnon = () => {
    setComment((comment) => ({ ...comment, is_anonym: !comment.is_anonym }));
  };

  const onClickSubmit = () => {
    if (Comment.content === '') return window.alert('내용을 입력해 주세요.');
    commentWrite(Comment, user.token);
    setComment({ ...Comment, content: '' });
    setCommentOn(true);
  };

  return (
    <section>
      {Post ? (
        <>
          <a href={`/${boardId}`}>
            <Box w="778px" h="61px" p="15px" mb="5px" border="1px" borderColor="#e3e3e3">
              <h1>{Board.title}</h1>
            </Box>
          </a>

          <Box w="778px" p="15px" border="1px" borderColor="#e3e3e3">
            <img className="img-user" src={img_user} alt="user" />
            <div className="postcontent-profile">
              <div className="black14b">익명{Post.user_id}</div>
              <time>{timePassed(Post.created_at)}</time>
            </div>

            {Post.title ? <h2>{Post.title}</h2> : null}
            <div className="gray14">{Post.content}</div>
            <ul className="stat">
              <li className="stat-like">{Post.numLikes}</li>
              <li className="stat-comment">{Post.numComments}</li>
              <li className="stat-star">{Post.numScraps}</li>
            </ul>
            <br />
          </Box>
        </>
      ) : null}

      <CommentList postId={postId} newComment={commentOn} />

      <div className="postcontent-form">
        <input
          className="postcontent-comment"
          name="content"
          value={Comment.content}
          type="text"
          maxLength="300"
          placeholder="댓글을 입력하세요."
          onChange={onChangeInput}
        />
        <div className="postcontent-option">
          <button
            className={Comment.is_anonym ? 'postcontent-anon-on' : 'postcontent-anon-off'}
            onClick={onClickAnon}
          />
          <button className="postcontent-submit" onClick={onClickSubmit} />
        </div>
      </div>
    </section>
  );
};

export default PostContent;
