import React from "react";
import MainButton from "../MainButton/MainButton";
import {
  DiscountDescription,
  DiscountLeft,
  DiscountRight,
  DiscountRightContainer,
  DiscountTitle,
  DiscountWrapper,
} from "./style";

function Discount() {
  return (
    <DiscountWrapper>
      <DiscountLeft>
        <DiscountTitle>Super discount on more than 100 USD</DiscountTitle>
        <DiscountDescription>
          Have you ever finally just write dummy info
        </DiscountDescription>
      </DiscountLeft>
      <DiscountRight>
        <DiscountRightContainer></DiscountRightContainer>
        <MainButton name="Shop new" />
      </DiscountRight>
    </DiscountWrapper>
  );
}

export default Discount;
