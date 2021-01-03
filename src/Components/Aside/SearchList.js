import { Link } from "react-router-dom";
import React from "react";
import "./Aside.css";

const SearchList = ({ list }) => {
  const renderedList = list.map((item, index) => {
    return (
      <Link to={item.link} key={index}>
        <div className="bottom-border campusbox">
          <span>{item.name}</span>
          <span>1명</span>
        </div>
      </Link>
    );
  });

  return <section className="campus-wrap">{renderedList}</section>;
};

export default SearchList;
