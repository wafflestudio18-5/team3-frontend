import { Main, UserInfo, Register, Post, Board, Login } from "./Pages";

const routes = {
  main: { path: "/", component: Main },
  login: { path: "/login", component: Login },
  register: { path: "/register", component: Register },
  UserInfo: { path: "/my", component: UserInfo },
  board: { path: "/:boardId", component: Board },
  boardPage: { path: "/:boardId/p/:pageId", component: Board },
  post: { path: "/:boardId/v/:postId", component: Post },
};

export default routes;
