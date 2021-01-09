import React, { useState } from "react";
import "./SearchBar.css";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ label, placeHolder, onUniChange, list }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
    onInputSubmit(e.target.value);
  };

  const onInputSubmit = (name) => {
    let uniList = list.filter((item) => {
      const length = name.length - 1;
      if (item.name.search(name.slice(0, length)) !== -1) {
        return true;
      }
      return false;
    });
    onUniChange(uniList);
  };

  return (
    <form className="searchForm">
      <label className="search-label">{label}</label>
      <Input
        size="md"
        variant="filled"
        placeholder={placeHolder}
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
