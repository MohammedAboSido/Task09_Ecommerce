import React from "react";
import {
  RegionContainer,
  RegionDetails,
  RegionImg,
  RegionName,
  RegionWrapper,
} from "./style";

function Region({ img, name, details }) {
  return (
    <RegionWrapper>
      <RegionImg src={img} />
      <RegionContainer>
        <RegionName>{name}</RegionName>
        <RegionDetails>{details}</RegionDetails>
      </RegionContainer>
    </RegionWrapper>
  );
}

export default Region;
