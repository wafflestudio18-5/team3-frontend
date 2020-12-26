import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="" className="pad">
            이용약관
          </Link>
        </li>
        <li>
          <Link to="" className="pad">
            About team3
          </Link>
        </li>
        <li>
          <Link to="" className="pad">
            @waffle-studio
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
