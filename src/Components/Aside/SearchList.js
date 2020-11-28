import { Link } from "react-router-dom";
import React from "react";
import "./Aside.css";

const SearchList = ({ list }) => {
  console.log(list.length);
  const renderedList = list.map((item, index) => {
    return (
      <Link to={item.link} key={index}>
        <div className="bottom-border campusbox">
          <span className="campusbox">{item.name}</span>
        </div>
      </Link>
    );
  });

  return <section className="campus-wrap">{renderedList}</section>;
};

export default SearchList;
