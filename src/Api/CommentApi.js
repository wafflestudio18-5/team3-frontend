import axios from "./api";

const commentList = async (params) => {
  const response = await axios.get("/find/board/comment/list/", { params });
  return response;
};

const commentWrite = async (body) => {
  const response = await axios.post("/save/board/comment/", body);
  return response;
};

const commentLike = async (body) => {
  const response = await axios.put("/save/board/comment/vote/", body);
  return response;
};

const commentDelete = async (body) => {
  const response = await axios.delete("/remove/board/comment/", body);
  return response;
};

export { commentList, commentWrite, commentLike, commentDelete };
