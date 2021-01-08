import axios from './api';

const postList = async (params) => {
  const response = await axios.get('/post/list/', { params });
  return response;
};

const postInfo = async (post_id) => {
  const response = await axios.get(`/post/${post_id}/info/`);
  return response;
};

const postWrite = async (body, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.post('/post/write/', body, config);
  return response;
};

const postLike = async (post_id) => {
  const response = await axios.put(`/post/${post_id}/like/`);
  return response;
};

const postDelete = async (post_id, token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.delete(`/post/${post_id}/delete/`, {}, config);
  return response;
};

const postMe = async () => {
  const response = await axios.get('/post/me/');
  return response;
};

export { postList, postInfo, postWrite, postLike, postDelete, postMe };
