import React from "react";
import {
  CouponCardButton,
  CouponCardContainer,
  CouponCardInput,
  CouponCardTitle,
  CouponCardWrapper,
} from "./style";

function CouponCard() {
  return (
    <CouponCardWrapper>
      <CouponCardTitle>Have a coupon?</CouponCardTitle>
      <CouponCardContainer>
        <CouponCardInput placeholder="Add coupon" />
        <CouponCardButton>Apply</CouponCardButton>
      </CouponCardContainer>
    </CouponCardWrapper>
  );
}

export default CouponCard;
