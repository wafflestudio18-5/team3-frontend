import { Link } from "react-router-dom";
import React from "react";
import "./Aside.css";

const SearchList = ({ list, mobile }) => {
  console.log(mobile);
  const renderedList = list.map((item, index) => {
    return (
      <Link to={item.link} key={index}>
        <div
          className={`bottom-border ${mobile === true ? "m-" : ""}campusbox`}
        >
          <span>{item.name}</span>
          <span>1명</span>
        </div>
      </Link>
    );
  });

  return (
    <section className={`${mobile === true ? "m-" : ""}campus-wrap`}>
      {renderedList}
    </section>
  );
};

export default SearchList;
