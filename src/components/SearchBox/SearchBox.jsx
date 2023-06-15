import React from "react";
import MainButton from "../MainButton/MainButton";
import { Categories, Category, SearchBoxWrapper, SearchInput } from "./style";

function SearchBox() {
  return (
    <SearchBoxWrapper>
      <SearchInput placeholder="Search" />
      <Categories>
        <Category>All categories</Category>
        <Category>UZ +997</Category>
        <Category>UN +967</Category>
      </Categories>
      <MainButton name="Search" />
    </SearchBoxWrapper>
  );
}

export default SearchBox;
