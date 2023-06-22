import React from "react";
import {
  RecommendedCardImg,
  RecommendedCardPrice,
  RecommendedCardTitle,
  RecommendedCardWrapper,
} from "./style";

function RecommendedCard({ image, title, price }) {
  return (
    <RecommendedCardWrapper>
      <RecommendedCardImg src={image} />
      <RecommendedCardPrice>{price}</RecommendedCardPrice>
      <RecommendedCardTitle>{title}</RecommendedCardTitle>
    </RecommendedCardWrapper>
  );
}

export default RecommendedCard;
