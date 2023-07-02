import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import Select from "../Select/Select";
import {
  MenuButton,
  MenuContainer,
  MenuItems,
  MenuTitle,
  MenuWrapper,
} from "./style";
function Menu({ title, type, items, isSeeAll, name, id }) {
  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuTitle>{title}</MenuTitle>
        <KeyboardArrowUpIcon className="arrowIcon" />
      </MenuContainer>
      <MenuItems>
        {items.map((item, index) => (
          <Select
            type={type}
            id={`${id}-${index}`}
            title={item}
            key={index}
            name={name}
          />
        ))}
      </MenuItems>
      {isSeeAll && <MenuButton>See all</MenuButton>}
    </MenuWrapper>
  );
}

export default Menu;
