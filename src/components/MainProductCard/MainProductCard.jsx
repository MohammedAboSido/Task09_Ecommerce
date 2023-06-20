import React from "react";
import {
  MainProductCardContainer,
  MainProductCardImg,
  MainProductCardPrice,
  MainProductCardTitle,
  MainProductCardWrapper,
} from "./style";

function MainProductCard({ title, price, img }) {
  return (
    <MainProductCardWrapper>
      <MainProductCardContainer>
        <MainProductCardTitle>{title}</MainProductCardTitle>
        <MainProductCardPrice>From USD {price}</MainProductCardPrice>
      </MainProductCardContainer>
      <MainProductCardImg src={img} />
    </MainProductCardWrapper>
  );
}

export default MainProductCard;
