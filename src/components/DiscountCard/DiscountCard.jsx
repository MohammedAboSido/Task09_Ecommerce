import React from "react";
import {
  DiscountCardContainer,
  DiscountCardDescription,
  DiscountCardDetails,
  DiscountCardImg,
  DiscountCardNewPrice,
  DiscountCardOldPrice,
  DiscountCardPrice,
  DiscountCardRate,
  DiscountCardReact,
  DiscountCardScore,
  DiscountCardStars,
  DiscountCardWrapper,
} from "./style";

function DiscountCard({
  img,
  newPrice,
  oldPrice,
  react,
  star,
  rate,
  description,
}) {
  return (
    <DiscountCardWrapper>
      <DiscountCardImg src={img} />
      <DiscountCardContainer>
        <DiscountCardDetails>
          <DiscountCardPrice>
            <DiscountCardNewPrice>{newPrice}</DiscountCardNewPrice>
            <DiscountCardOldPrice>{oldPrice}</DiscountCardOldPrice>
          </DiscountCardPrice>
          <DiscountCardReact>{react}</DiscountCardReact>
        </DiscountCardDetails>

        <DiscountCardRate>
          <DiscountCardStars>
            {star}
            {star}
            {star}
            {star}
            {star}
          </DiscountCardStars>
          <DiscountCardScore>{rate}</DiscountCardScore>
        </DiscountCardRate>
        <DiscountCardDescription>{description}</DiscountCardDescription>
      </DiscountCardContainer>
    </DiscountCardWrapper>
  );
}

export default DiscountCard;
