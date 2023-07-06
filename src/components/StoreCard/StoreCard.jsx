import React from "react";
import {
  StoreCardContainer,
  StoreCardDescription,
  StoreCardDetails,
  StoreCardImg,
  StoreCardLink,
  StoreCardNewPrice,
  StoreCardOldPrice,
  StoreCardOrder,
  StoreCardPrice,
  StoreCardRate,
  StoreCardReact,
  StoreCardScore,
  StoreCardShipping,
  StoreCardStars,
  StoreCardTitle,
  StoreCardWrapper,
} from "./style";

function StoreCard({
  img,
  newPrice,
  oldPrice,
  react,
  star,
  rate,
  description,
  title,
  order,
  dot,
}) {
  return (
    <StoreCardWrapper>
      <StoreCardImg src={img} />
      <StoreCardContainer>
        <StoreCardTitle>{title}</StoreCardTitle>
        <StoreCardDetails>
          <StoreCardPrice>
            <StoreCardNewPrice>{newPrice}</StoreCardNewPrice>
            <StoreCardOldPrice>{oldPrice}</StoreCardOldPrice>
          </StoreCardPrice>
          <StoreCardReact>{react}</StoreCardReact>
        </StoreCardDetails>

        <StoreCardRate>
          <StoreCardStars>
            {star}
            {star}
            {star}
            {star}
            {star}
          </StoreCardStars>
          <StoreCardScore>{rate}</StoreCardScore>
          {dot}
          <StoreCardOrder>{order}</StoreCardOrder>
          {dot}
          <StoreCardShipping>Free Shipping</StoreCardShipping>
        </StoreCardRate>
        <StoreCardDescription>{description}</StoreCardDescription>
        <StoreCardLink>View details</StoreCardLink>
      </StoreCardContainer>
    </StoreCardWrapper>
  );
}

export default StoreCard;
