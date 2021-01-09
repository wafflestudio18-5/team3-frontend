import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Submenu from '../../Components/Submenu/Submenu';
import HotArticle from '../../Components/BoardContent/HotArticle';

import SubBoard from '../../Components/SubBoard/SubBoard';

const HotArticlePage = () => {
  return (
    <>
      <NavBar />
      <Submenu />
      <div className="container">
        <HotArticle />
        <SubBoard />
      </div>
    </>
  );
};

export default HotArticlePage;
