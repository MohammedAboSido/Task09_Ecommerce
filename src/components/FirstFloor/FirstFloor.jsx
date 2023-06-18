import { useTheme } from "@emotion/react";
import React from "react";
import { Container } from "../../global/components";
import GreetingCard from "./../GreetingCard/GreetingCard";
import OfferCard from "./../OfferCard";
import ProductsLinks from "./../ProductsLinks";
import Trending from "./../Trending/Trending";
import { FirstFloorCards, FirstFloorWrapper } from "./style";

function FirstFloor() {
  const theme = useTheme();
  return (
    <Container>
      <FirstFloorWrapper>
        <ProductsLinks />
        <Trending />
        <FirstFloorCards>
          <GreetingCard />
          <OfferCard
            title="Get US $10 off with a new supplier"
            bgColor={theme.pallet.orangeColor}
            textColor={theme.pallet.whiteColor}
          />
          <OfferCard
            title="Send quotes with supplier preferences"
            bgColor={theme.pallet.blueColor7}
            textColor={theme.pallet.whiteColor}
          />
        </FirstFloorCards>
      </FirstFloorWrapper>
    </Container>
  );
}

export default FirstFloor;
