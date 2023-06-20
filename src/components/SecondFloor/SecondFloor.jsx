import React from "react";
import laptop from "../../assets/images/image-34.png";
import camera from "../../assets/images/imgcard7.png";
import phone from "../../assets/images/imgstore2.png";
import headphone from "../../assets/images/related3.png";
import watch from "../../assets/images/watch.png";
import { Container } from "../../global/components";
import OfferProductCard from "./../OfferProductCard/OfferProductCard";
import Offers from "./../Offers/Offers";
import { SecondFloorWrapper } from "./style";

function SecondFloor() {
  return (
    <Container>
      <SecondFloorWrapper>
        <Offers />
        <OfferProductCard img={watch} title="Smart watches" discount="-25%" />
        <OfferProductCard img={laptop} title="Laptops" discount="-15%" />
        <OfferProductCard img={camera} title="GoPro Cameras" discount="-40%" />
        <OfferProductCard img={headphone} title="Headphones" discount="-25%" />
        <OfferProductCard img={phone} title="Canon Cameras" discount="-25%" />
      </SecondFloorWrapper>
    </Container>
  );
}

export default SecondFloor;
