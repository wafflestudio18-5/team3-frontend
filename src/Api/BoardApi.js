import axios from "./api";

const boardList = async () => {
  const response = await axios.get("/board/list/");
  return response;
};

export { boardList };
