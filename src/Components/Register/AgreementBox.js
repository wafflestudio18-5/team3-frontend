import React, { useEffect, useState } from "react";
import "./registerForm.css";
import { Checkbox } from "@chakra-ui/react";
const AgreementBox = ({ term, checked, onCheck }) => {
  const [check, setCheck] = useState(checked);
  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  const renderedTermContent = term.contents.map((item, index) => {
    return (
      <div key={index} className="term-descript-font">
        <h4>{item.head}</h4>
        <p>{item.content}</p>
      </div>
    );
  });

  return (
    <div className="agree-box">
      <Checkbox
        size="sm"
        colorScheme="red"
        isChecked={check}
        onClick={(e) => {
          e.preventDefault();
          setCheck(!check);
          onCheck();
        }}
      >
        {term.label}
      </Checkbox>
      {!check ? (
        <article className="box-border term-descript-box">
          {renderedTermContent}
        </article>
      ) : null}
    </div>
  );
};

export default AgreementBox;
