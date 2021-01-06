import React, { useEffect, useState } from "react";
import "./registerForm.css";
import { Checkbox } from "@chakra-ui/react";
import { useTermContext } from "../../Context/";

const AgreementBox = ({ term, checked, ind }) => {
  const { checkTerm } = useTermContext();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const renderedTermContent = term.contents.map((item, index) => {
    return (
      <div key={index} className="term-descript-font">
        <h4 className="term-head-font">{item.head}</h4>
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
        onChange={() => {
          setCheck(!check);
          checkTerm(ind);
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
