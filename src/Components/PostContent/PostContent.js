import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { boardList } from '../../Api/BoardApi';
import { postInfo, postLike, postUpdate, postDelete } from '../../Api/PostApi';
import { commentWrite } from '../../Api/CommentApi';
import { useLoginContext } from '../../Context/LoginData';
import CommentList from './CommentList';
import timePassed from '../../helpers/functions/time';
import img_user from '../../Images/user.png';
import './PostContent.css';

const contentplaceholder =
  '여기를 눌러서 글을 작성할 수 있습니다.\n\n[커뮤니티 이용규칙 준수] \n커뮤니티 이용규칙 전문을 반드시 숙지하신 후 글을 작성해 주세요. 이용규칙을 위반한 경우 작성한 게시물이 삭제되거나, 글쓰기 제한 등의 제재가 가해질 수 있습니다. \n\n자세한 내용은 홈 탭 우측 상단의 [내 정보] > [커뮤니티 이용규칙]을 참고하시기 바랍니다. \n\n[홍보 게시물 작성 금지] \n1. 링크 클릭, 학교 대항전, 추천인 입력 \n2. 글 작성·계정 공유 요청 등 게시물 대리 작성 행위 \n3. 공동구매, 펀딩, 기부금품 요청 행위 \n4. 그 외 모든 직간접적 광고·홍보·판매 행위 \n \n[선거, 정당·정치인 관련 게시물 작성 금지] \n1. 정당·정치인, 선거 후보자 및 관련자에 대한 비방, 비하, 모욕 \n2. 선거 후보자에 대한 지지·홍보 및 선거운동 활동 \n3. 여론조사 결과 인용 \n\n[커뮤니티 이용규칙에 어긋나는 행위 금지] \n1. 게시판의 스크린샷, 게시물 내용 유출 \n2. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시 \n3. 특정인이나 단체/지역을 비방하는 행위 \n4. 기타 약관 및 현행법에 어긋나는 행위';
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
  const history = useHistory();

  const [Board, setBoard] = useState(defaultBoard);
  const [Post, setPost] = useState();
  const [Modify, setModify] = useState(false);
  const [NewPost, setNewPost] = useState();

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

  const onClickDelete = () => {
    if (window.confirm('이 글을 삭제하시겠습니까?')) {
      postDelete(postId).catch((err) => console.log(err));
      history.push(`/${boardId}`);
    }
  };

  const onClickSubmit = () => {
    if (Comment.content === '') return window.alert('내용을 입력해 주세요.');
    commentWrite(Comment, user.token);
    setComment({ ...Comment, content: '' });
    setCommentOn(true);
  };

  const onClickLike = () => {
    if (window.confirm('이 글에 공감하십니까?')) {
      postLike(postId, user.token)
        .then(() => setPost({ ...Post, numLikes: Post.numLikes + 1 }))
        .catch((err) => console.log(err.response));
    }
  };

  // modify
  const onClickModify = () => {
    setModify(true);
    setNewPost(Post);
  };

  const onModifyInput = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...NewPost,
      [name]: value,
    });
  };

  const onClickHashtag = () => {
    setNewPost({ ...NewPost, content: NewPost.content + '#' });
  };

  const onModifyAnon = () => {
    setNewPost((post) => ({ ...post, is_anonym: !post.is_anonym }));
  };

  const onModifySubmit = () => {
    if (NewPost.title === '') return window.alert('제목을 입력해 주세요.');
    if (NewPost.content === '') return window.alert('내용을 입력해 주세요.');

    postUpdate(Post.id, NewPost, user.token).catch((err) => console.log(err.response));
    setModify(false);
  };

  return (
    <section>
      {Board ? (
        <a href={`/${boardId}`}>
          <Box w="778px" h="61px" p="15px" mb="5px" border="1px" borderColor="#e3e3e3">
            <h1>{Board.title}</h1>
          </Box>
        </a>
      ) : null}

      {Modify ? (
        <>
          <div className="boardcontent-form">
            <input
              className="boardcontent-form-title"
              name="title"
              value={NewPost.title}
              type="text"
              size="30"
              placeholder="글 제목"
              onChange={onModifyInput}
            />
            <textarea
              className="boardcontent-form-content"
              name="content"
              value={NewPost.content}
              type="text"
              placeholder={contentplaceholder}
              onChange={onModifyInput}
            />
            <button className="boardcontent-hashtag" onClick={onClickHashtag} />
            <button className="boardcontent-submit" onClick={onModifySubmit} />
            <button
              className={Post.is_anonym ? 'boardcontent-anon-on' : 'boardcontent-anon-off'}
              onClick={onModifyAnon}
            />
          </div>
          <button className="boardcontent-button-prev" onClick={() => setModify(false)}>
            취소
          </button>
        </>
      ) : (
        <>
          {Post ? (
            <Box w="778px" p="15px" border="1px" borderColor="#e3e3e3">
              <img className="img-user" src={img_user} alt="user" />
              {Post.user_id === user.id ? (
                <div className="postcontent-status">
                  <button onClick={onClickModify}>수정</button>
                  <button onClick={onClickDelete}>삭제</button>
                </div>
              ) : null}
              <div className="postcontent-profile">
                <div className="black14b">{Post.is_anonym ? '익명' : Post.nickname}</div>
                <time>{timePassed(Post.created_at)}</time>
              </div>

              {Post.title ? <h2>{Post.title}</h2> : null}
              <div className="gray14">{Post.content}</div>
              <div className="stat">
                <button className="stat-like" onClick={onClickLike}>
                  {Post.numLikes}
                </button>
                <span className="stat-comment">{Post.numComments}</span>
                <span className="stat-star">{Post.numScraps}</span>
              </div>
              <br />
            </Box>
          ) : null}

          <CommentList postId={postId} />
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
        </>
      )}
    </section>
  );
};

export default PostContent;
