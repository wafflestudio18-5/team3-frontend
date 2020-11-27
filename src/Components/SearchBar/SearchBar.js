import React, { useState } from "react";
import "./SearchBar.css";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchBar = ({ label, placeHolder, onSubmit }) => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onInputSubmit = () => {
    onSubmit(input);
  };

  return (
    <form onSubmit={onInputSubmit} className="searchForm">
      <label className="search-label">{label}</label>
      <Input
        size="md"
        variant="filled"
        placeHolder={placeHolder}
        value={input}
        onChange={onInputChange}
        icon="SearchIcon"
        width="90%"
        mt="10px"
        mb="3px"
      ></Input>
    </form>
  );
};

export default SearchBar;
