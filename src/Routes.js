import { Main, UserInfo, Register, Post, Board, Login } from "./Pages";

const routes = {
  main: { path: "/", component: Main },
  login: { path: "/login", component: Login },
  register: { path: "/register", component: Register },
  userInfo: { path: "/my", component: UserInfo },
  board: { path: "/:boardId", component: Board },
  post: { path: "/:boardId/v/:postId", component: Post },
};

export default routes;
