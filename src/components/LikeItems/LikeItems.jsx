import React from "react";
import jacket1 from "../../assets/images/jacket1.png";
import jacket2 from "../../assets/images/jacket2.png";
import jacket3 from "../../assets/images/jacket3.png";
import jacket4 from "../../assets/images/jacket4.png";
import jacket5 from "../../assets/images/jacket5.png";
import LikeCard from "../../components/LikeCard/LikeCard";
import { LikeItemsContainer, LikeItemsTitle, LikeItemsWrapper } from "./style";

function LikeItems() {
  return (
    <LikeItemsWrapper>
      <LikeItemsTitle>You may like</LikeItemsTitle>
      <LikeItemsContainer>
        <LikeCard
          img={jacket1}
          title="Apple Watch Series Space Gray"
          price="$7.00 - $99.50"
        />
        <LikeCard
          img={jacket2}
          title="Apple Watch Series Space Gray"
          price="$7.00 - $99.50"
        />
        <LikeCard
          img={jacket3}
          title="Apple Watch Series Space Gray"
          price="$7.00 - $99.50"
        />
        <LikeCard
          img={jacket4}
          title="Apple Watch Series Space Gray"
          price="$7.00 - $99.50"
        />
        <LikeCard
          img={jacket5}
          title="Apple Watch Series Space Gray"
          price="$7.00 - $99.50"
        />
      </LikeItemsContainer>
    </LikeItemsWrapper>
  );
}

export default LikeItems;
