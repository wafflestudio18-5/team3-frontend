import React from "react";

import "./Submenu.css";

function Submenu() {
  return (
    <header className="submenu">
      <div className="submenu-content">
        <ul className="submenu-column">
          <li className="submenu-text">
            <a href="/1">자유게시판</a>
          </li>
          <li className="submenu-text">
            <a href="/2">비밀게시판</a>
          </li>
        </ul>
        <ul className="submenu-column">
          <li className="submenu-text">
            <a href="/3">졸업생게시판</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Submenu;
