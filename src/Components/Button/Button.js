import React from "react";
import "./Button.css";
export const Button = ({ name, inf, callback }) => {
  return (
    <button className="red-button" onSubmit={() => callback(inf)}>
      {name}
    </button>
  );
};
