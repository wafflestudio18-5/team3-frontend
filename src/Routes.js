import Main from "./Pages/Main";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";
import Board from "./Pages/Board";
import Post from "./Pages/Post";

const routes = {
  main: { path: "/", component: Main },
  login: { path: "/login", component: Login },
  register: { path: "/register", component: Register },
  board: { path: "/:boardId", component: Board },
  post: { path: "/:boardId/v/:postId", component: Post },
};

export default routes;
