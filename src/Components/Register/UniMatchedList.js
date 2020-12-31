import React from "react";
import { UniversityList } from "../../Context/UniversityList";
import "./registerForm.css";

const UniMatchedList = ({ name, onUniSet }) => {
  const renderedList = () => {
    return UniversityList.map((uni, index) => {
      let sameInd = uni.indexOf(name);
      if (sameInd === -1 && name.length > 1) {
        sameInd = uni.indexOf(name.slice(0, -1));
      }
      return sameInd !== -1 && name.length ? (
        <li
          key={index}
          className="register-uni-list"
          onClick={() => onUniSet(uni)}
        >
          {uni.slice(0, sameInd)}
          <span>{uni.slice(sameInd, sameInd + name.length)}</span>
          {uni.slice(sameInd + name.length, uni.length)}
        </li>
      ) : null;
    });
  };

  return <ul>{renderedList()}</ul>;
};

export default UniMatchedList;
