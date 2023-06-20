import React from "react";
import {
  OfferProductCardDiscount,
  OfferProductCardImg,
  OfferProductCardTitle,
  OfferProductCardWrapper,
} from "./style";

function OfferProductCard({ img, title, discount }) {
  return (
    <OfferProductCardWrapper>
      <OfferProductCardImg src={img} />
      <OfferProductCardTitle>{title}</OfferProductCardTitle>
      <OfferProductCardDiscount>{discount}</OfferProductCardDiscount>
    </OfferProductCardWrapper>
  );
}

export default OfferProductCard;
