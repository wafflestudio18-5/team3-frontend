import React from "react";
import { Box } from "@chakra-ui/react";

import "./SubBoard.css";

function SubBoard() {
  return (
    <aside className="aside-right">
      <article className="subboard-lg">
        <div className="subboard-title">HOT 게시물</div>
      </article>
      <article className="subboard-sm">
        <a href="/">
          <div className="subboard-title">BEST 게시판</div>
        </a>
      </article>
    </aside>
  );
}

export default SubBoard;
