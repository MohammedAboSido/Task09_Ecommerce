import React from "react";
import img1 from "../../assets/images/Bitmap22.png";
import img5 from "../../assets/images/bag.png";
import img8 from "../../assets/images/gra.png";
import img7 from "../../assets/images/imgstore5.png";
import img3 from "../../assets/images/jacket.png";
import img6 from "../../assets/images/jeansshort.png";
import img4 from "../../assets/images/jzdan.png";
import img2 from "../../assets/images/sweetir.png";
import RecommendedCard from "../../components/RecommendedCard/RecommendedCard";
import { Container } from "./../../global/components";
import {
  SixthFloorCards,
  SixthFloorWrapper,
  SixthFloorWrapperTitle,
} from "./style";

function SixthFloor() {
  return (
    <Container>
      <SixthFloorWrapper>
        <SixthFloorWrapperTitle>Recommended items</SixthFloorWrapperTitle>
        <SixthFloorCards>
          <RecommendedCard
            image={img1}
            price="10.30$"
            title="T-shirts with multiple colors, for men"
          />
          <RecommendedCard
            image={img2}
            price="10.30$"
            title="Jeans shorts for men blue color"
          />
          <RecommendedCard
            image={img3}
            price="12.50$"
            title="Brown winter coat medium size"
          />
          <RecommendedCard
            image={img4}
            price="34.00$"
            title="Jeans bag for travel for men"
          />
          <RecommendedCard image={img5} price="90.00$" title="Leather wallet" />
          <RecommendedCard
            image={img6}
            price="9.99$"
            title="Canon camera black, 100x zoom"
          />
          <RecommendedCard
            image={img7}
            price="8.99$"
            title="Headset for gaming with mic"
          />
          <RecommendedCard
            image={img5}
            price="10.30$"
            title="Smartwatch silver color modern"
          />
          <RecommendedCard
            image={img8}
            price="10.30$"
            title="T-shirts with multiple colors, for men"
          />
          <RecommendedCard
            image={img1}
            price="80.95$"
            title="Jeans bag for travel for men"
          />
        </SixthFloorCards>
      </SixthFloorWrapper>
    </Container>
  );
}

export default SixthFloor;
