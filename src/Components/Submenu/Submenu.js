import React, { useState, useEffect } from 'react';

import { boardList } from '../../Api/BoardApi';
import './Submenu.css';

function Submenu() {
  const [Boards, setBoards] = useState();

  useEffect(() => {
    boardList().then((response) => setBoards(response.data));
  }, []);

  return (
    <header className="submenu">
      <div className="submenu-content">
        <ul className="submenu-column">
          {Boards
            ? Boards.map((board) => (
                <li className="submenu-text" key={board.id}>
                  <a href={'/' + board.id}>{board.title}</a>
                </li>
              ))
            : null}
        </ul>
      </div>
    </header>
  );
}

export default Submenu;
