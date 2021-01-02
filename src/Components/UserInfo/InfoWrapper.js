import React from "react";
import { Link } from "react-router-dom";

import "./userInfo.css";
const InfoWrapper = ({ section }) => {
  const { header, contents } = section;
  const renderedContents = contents.map((i, index) => {
    return (
      <Link to={i.link} key={index}>
        <p className="info-detail-font">{i.name}</p>
      </Link>
    );
  });
  return (
    <article className="light-border-wrapper">
      <h2 className="info-header-font">{header}</h2>
      {renderedContents}
    </article>
  );
};

export default InfoWrapper;
