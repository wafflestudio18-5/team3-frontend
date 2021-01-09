import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Submenu from '../../Components/Submenu/Submenu';
import MyArticle from '../../Components/BoardContent/MyArticle';

import SubBoard from '../../Components/SubBoard/SubBoard';

const MyArticlePage = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <MyArticle />
        <SubBoard />
      </div>
    </>
  );
};

export default MyArticlePage;
