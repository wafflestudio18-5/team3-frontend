import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Submenu from '../../Components/Submenu/Submenu';
import MyCommentArticle from '../../Components/BoardContent/MyCommentArticle';

import SubBoard from '../../Components/SubBoard/SubBoard';

const MyCommentArticlePage = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <MyCommentArticle />
        <SubBoard />
      </div>
    </>
  );
};

export default MyCommentArticlePage;
