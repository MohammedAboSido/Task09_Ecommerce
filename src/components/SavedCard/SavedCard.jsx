import React from "react";
import img1 from "../../assets/images/Vector6.png";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import {
  SavedCardContainer,
  SavedCardDescription,
  SavedCardImg,
  SavedCardPrice,
  SavedCardWrapper,
} from "./style";
function SavedCard({ img, price, description }) {
  return (
    <SavedCardWrapper>
      <SavedCardImg src={img} />
      <SavedCardContainer>
        <SavedCardPrice>{price}</SavedCardPrice>
        <SavedCardDescription>{description}</SavedCardDescription>
        <SecondaryButton img={img1} title="Move to Cart" brand="google" />
      </SavedCardContainer>
    </SavedCardWrapper>
  );
}

export default SavedCard;
