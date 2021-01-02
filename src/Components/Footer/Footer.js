import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = ({ page }) => {
  const ref = useRef();
  useEffect(() => {
    switch (page) {
      case "NL":
        ref.current.className = "footer footer-NL";
        break;
      case "login":
        ref.current.className = "footer footer-login";
        break;
      case "my":
        ref.current.className = "footer";
        break;
      default:
        ref.current.className = "footer footer-main";
        break;
    }
  }, []);
  return (
    <footer className="footer" ref={ref}>
      <ul>
        <li className="">
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
