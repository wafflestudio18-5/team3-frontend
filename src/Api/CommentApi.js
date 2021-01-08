import axios from './api';

const commentList = async (params) => {
  const response = await axios.get('/comment/list/', { params });
  return response;
};

const commentWrite = async (body, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.post('/comment/write/', body, config);
  return response;
};

const commentLike = async (comment_id, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.put(`/comment/${comment_id}/like/`, {}, config);
  return response;
};

const commentUpdate = async (comment_id, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.put(`/comment/${comment_id}/update/`, {}, config);
  return response;
};

const commentDelete = async (comment_id, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.delete(`/comment/${comment_id}/delete/`, {}, config);
  return response;
};

const commentMe = async (token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.get('/comment/me/', {}, config);
  return response;
};

export { commentList, commentWrite, commentLike, commentUpdate, commentDelete, commentMe };
