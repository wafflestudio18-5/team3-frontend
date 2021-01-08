import {
  Main,
  UserInfo,
  Register,
  Post,
  Board,
  Login,
  Verified,
  MyArticlePage,
  MyCommentArticlePage,
} from './Pages';

const routes = {
  main: { path: '/', component: Main },
  login: { path: '/login', component: Login },
  register: { path: '/register', component: Register },
  UserInfo: { path: '/my', component: UserInfo },
  board: { path: '/:boardId', component: Board },
  boardPage: { path: '/:boardId/p/:pageId', component: Board },
  post: { path: '/:boardId/v/:postId', component: Post },
  verified: { path: '/verified', component: Verified },
  myarticle: { path: '/myarticle', component: MyArticlePage },
  // myarticlePage: { path: '/myarticle/p/:pageId', component: MyArticle}
  mycommentarticle: { path: '/mycommentarticle', component: MyCommentArticlePage },
  // mycommentarticlePage: { path: '/mycommentarticle/p/:pageId', component: MyCommentArticle}
};

export default routes;
