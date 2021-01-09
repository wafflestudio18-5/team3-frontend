import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Submenu from '../../Components/Submenu/Submenu';
import BestArticle from '../../Components/BoardContent/BestArticle';

import SubBoard from '../../Components/SubBoard/SubBoard';

const BestArticlePage = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <BestArticle />
        <SubBoard />
      </div>
    </>
  );
};

export default BestArticlePage;
