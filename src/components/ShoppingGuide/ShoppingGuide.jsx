import React from "react";
import {
  ShoppingGuideBtn,
  ShoppingGuideContainer,
  ShoppingGuideImg,
  ShoppingGuideTitle,
  ShoppingGuideWrapper,
} from "./style";

function ShoppingGuide({ title, img }) {
  return (
    <ShoppingGuideWrapper>
      <ShoppingGuideImg src={img} />
      <ShoppingGuideContainer>
        <ShoppingGuideTitle>{title}</ShoppingGuideTitle>
        <ShoppingGuideBtn>Source new</ShoppingGuideBtn>
      </ShoppingGuideContainer>
    </ShoppingGuideWrapper>
  );
}

export default ShoppingGuide;
