import axios from './api';

const commentList = async (params) => {
  const response = await axios.get('/comment/list/', { params });
  return response;
};

const commentWrite = async (body) => {
  const response = await axios.post('/comment/write/', body);
  return response;
};

const commentLike = async (comment_id) => {
  const response = await axios.put(`/comment/${comment_id}/like/`);
  return response;
};

const commentUpdate = async (comment_id) => {
  const response = await axios.put(`/comment/${comment_id}/update/`);
  return response;
};

const commentDelete = async (comment_id) => {
  const response = await axios.delete(`/comment/${comment_id}/delete/`);
  return response;
};

const commentMe = async () => {
  const response = await axios.get(`/comment/me/`);
  return response;
};

export { commentList, commentWrite, commentLike, commentUpdate, commentDelete, commentMe };
