import React from "react";
import backArrow from "../../assets/images/Vector5.png";
import img2 from "../../assets/images/bag.png";
import img3 from "../../assets/images/chair.png";
import img1 from "../../assets/images/jacket5.png";
import CartCard from "../CartCard/CartCard";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { CartContainer, CartRemoveBtn, CartWrapper } from "./style";

function Cart() {
  return (
    <CartWrapper>
      <CartCard
        img={img1}
        details="Size: medium,Color: blue,Material: Plastic Seller: Artel Market"
        price="$78.99"
        title="T-shirts with multiple colors, for men and lady"
      />
      <CartCard
        img={img2}
        details="Size: medium,Color: blue,Material: Plastic Seller: Best factory LLC"
        price="$39.00"
        title="T-shirts with multiple colors, for men and lady"
      />
      <CartCard
        img={img3}
        details="Size: medium,Color: blue,Material: Plastic Seller: Artel Market"
        price="$170.50"
        title="T-shirts with multiple colors, for men and lady"
      />
      <CartContainer>
        <SecondaryButton
          img={backArrow}
          title="Back to shop"
          brand="facebook"
        />
        <CartRemoveBtn>Remove all</CartRemoveBtn>
      </CartContainer>
    </CartWrapper>
  );
}

export default Cart;
