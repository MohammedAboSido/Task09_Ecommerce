import React from "react";
import amercan from "../../assets/images/amercan.png";
import express from "../../assets/images/express.png";
import visa from "../../assets/images/payment.png";
import payment2 from "../../assets/images/payment2.png";
import paypal from "../../assets/images/visa.png";
import {
  CheckoutCardButton,
  CheckoutCardContainer,
  CheckoutCardDiscount,
  CheckoutCardPayment,
  CheckoutCardPaymentMethod,
  CheckoutCardPaymentMethodImg,
  CheckoutCardSubtotal,
  CheckoutCardTax,
  CheckoutCardTitle,
  CheckoutCardTotal,
  CheckoutCardTotalPrice,
  CheckoutCardWrapper,
} from "./style";
function CheckoutCard() {
  return (
    <CheckoutCardWrapper>
      <CheckoutCardContainer>
        <CheckoutCardPayment>
          <CheckoutCardTitle>Subtotal:</CheckoutCardTitle>
          <CheckoutCardSubtotal>$1403.97</CheckoutCardSubtotal>
        </CheckoutCardPayment>
        <CheckoutCardPayment>
          <CheckoutCardTitle>Discount:</CheckoutCardTitle>
          <CheckoutCardDiscount>- $60.00</CheckoutCardDiscount>
        </CheckoutCardPayment>
        <CheckoutCardPayment>
          <CheckoutCardTitle>Tax:</CheckoutCardTitle>
          <CheckoutCardTax>+ $14.00</CheckoutCardTax>
        </CheckoutCardPayment>
        <CheckoutCardPayment>
          <CheckoutCardTotal>Total:</CheckoutCardTotal>
          <CheckoutCardTotalPrice>$1357.97</CheckoutCardTotalPrice>
        </CheckoutCardPayment>
      </CheckoutCardContainer>
      <CheckoutCardButton>Checkout</CheckoutCardButton>
      <CheckoutCardPaymentMethod>
        <CheckoutCardPaymentMethodImg src={amercan} />
        <CheckoutCardPaymentMethodImg src={express} />
        <CheckoutCardPaymentMethodImg src={paypal} />
        <CheckoutCardPaymentMethodImg src={visa} />
        <CheckoutCardPaymentMethodImg src={payment2} />
      </CheckoutCardPaymentMethod>
    </CheckoutCardWrapper>
  );
}

export default CheckoutCard;
