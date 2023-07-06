import React from "react";
import BottomFooter from "../../components/BottomFooter/BottomFooter";
import Cart from "../../components/Cart/Cart";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import CouponCard from "../../components/CouponCard/CouponCard";
import Discount from "../../components/Discount/Discount";
import Features from "../../components/Features/Features";
import SavedCards from "../../components/SavedCards/SavedCards";
import { Container } from "../../global/components";
import BottomHeader from "./../../components/BottomHeader/BottomHeader";
import TopFooter from "./../../components/TopFooter/TopFooter";
import TopHeader from "./../../components/TopHeader/TopHeader";
import {
  CartPageFirstFloor,
  CartPagePayment,
  CartPageTitle,
  CartPageWrapper,
} from "./style";
function CartPage() {
  return (
    <CartPageWrapper>
      <TopHeader />
      <BottomHeader />
      <Container>
        <CartPageTitle>My Cart (3)</CartPageTitle>
        <CartPageFirstFloor>
          <Cart />
          <CartPagePayment>
            <CouponCard />
            <CheckoutCard />
          </CartPagePayment>
        </CartPageFirstFloor>
        <Features />
        <SavedCards />
        <Discount />
      </Container>
      <TopFooter />
      <BottomFooter />
    </CartPageWrapper>
  );
}

export default CartPage;
