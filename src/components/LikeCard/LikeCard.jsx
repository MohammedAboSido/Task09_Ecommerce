import React from "react";
import {
  LikeCardContainer,
  LikeCardImg,
  LikeCardPrice,
  LikeCardTitle,
  LikeCardWrapper,
} from "./style";

function LikeCard({ img, title, price }) {
  return (
    <LikeCardWrapper>
      <LikeCardImg src={img} />
      <LikeCardContainer>
        <LikeCardTitle>{title}</LikeCardTitle>
        <LikeCardPrice>{price}</LikeCardPrice>
      </LikeCardContainer>
    </LikeCardWrapper>
  );
}

export default LikeCard;
