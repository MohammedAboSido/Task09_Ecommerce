import React from "react";
import img5 from "../../assets/images/imgstore2.png";
import img1 from "../../assets/images/imgstore3.png";
import img2 from "../../assets/images/imgstore4.png";
import img3 from "../../assets/images/imgstore5.png";
import img4 from "../../assets/images/imgstore9.png";
import SavedCard from "../SavedCard/SavedCard";
import {
  SavedCardsContainer,
  SavedCardsTitle,
  SavedCardsWrapper,
} from "./style";

function SavedCards() {
  return (
    <SavedCardsWrapper>
      <SavedCardsTitle>Saved for later</SavedCardsTitle>
      <SavedCardsContainer>
        <SavedCard
          description="GoPro HERO6 4K Action Camera - Black"
          price="$99.50"
          img={img1}
        />
        <SavedCard
          description="GoPro HERO6 4K Action Camera - Black"
          price="$99.50"
          img={img2}
        />
        <SavedCard
          description="GoPro HERO6 4K Action Camera - Black"
          price="$99.50"
          img={img3}
        />
        <SavedCard
          description="GoPro HERO6 4K Action Camera - Black"
          price="$99.50"
          img={img4}
        />
        <SavedCard
          description="GoPro HERO6 4K Action Camera - Black"
          price="$99.50"
          img={img5}
        />
      </SavedCardsContainer>
    </SavedCardsWrapper>
  );
}

export default SavedCards;
