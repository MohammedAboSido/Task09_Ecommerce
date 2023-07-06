import React from "react";
import {
  CartCardButtons,
  CartCardCount,
  CartCardCounts,
  CartCardDetails,
  CartCardImg,
  CartCardLeft,
  CartCardLeftContainer,
  CartCardPrice,
  CartCardRemoveBtn,
  CartCardRight,
  CartCardSaveBtn,
  CartCardTitle,
  CartCardWrapper,
} from "./style";

function CartCard({ img, title, details, price }) {
  return (
    <CartCardWrapper>
      <CartCardLeft>
        <CartCardImg src={img} />
        <CartCardLeftContainer>
          <CartCardTitle>{title}</CartCardTitle>
          <CartCardDetails>{details}</CartCardDetails>
          <CartCardButtons>
            <CartCardRemoveBtn>Remove</CartCardRemoveBtn>
            <CartCardSaveBtn>Save for later</CartCardSaveBtn>
          </CartCardButtons>
        </CartCardLeftContainer>
      </CartCardLeft>
      <CartCardRight>
        <CartCardPrice>{price}</CartCardPrice>
        <CartCardCounts>
          <CartCardCount>Qtv: 1</CartCardCount>
          <CartCardCount>Qtv: 3</CartCardCount>
          <CartCardCount>Qtv: 9</CartCardCount>
        </CartCardCounts>
      </CartCardRight>
    </CartCardWrapper>
  );
}

export default CartCard;
