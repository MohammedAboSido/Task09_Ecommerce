import React from "react";
import appliance from "../../assets/images/appliance.png";
import blinder from "../../assets/images/blinder.png";
import chair from "../../assets/images/chair.png";
import chair1 from "../../assets/images/chair1.png";
import chair2 from "../../assets/images/chair2.png";
import gra from "../../assets/images/gra.png";
import img from "../../assets/images/image-92.png";
import mixer from "../../assets/images/mixer.png";
import tree from "../../assets/images/tree.png";
import { Container } from "../../global/components";
import MainProductCard from "../MainProductCard/MainProductCard";
import ShoppingGuide from "../ShoppingGuide/ShoppingGuide";

import {
  ThirdFloorContainer,
  ThirdFloorContainerBottom,
  ThirdFloorContainerTop,
  ThirdFloorWrapper,
} from "./style";

function ThirdFloor() {
  return (
    <Container>
      <ThirdFloorWrapper>
        <ShoppingGuide title="Home and outdoor" img={img} />
        <ThirdFloorContainer>
          <ThirdFloorContainerTop>
            <MainProductCard title="Soft chairs" price="19" img={chair} />
            <MainProductCard title="Soft & chair" price="19" img={chair1} />
            <MainProductCard title="Kitchen dishes" price="19" img={chair2} />
            <MainProductCard title="Pottery" price="19" img={gra} />
          </ThirdFloorContainerTop>
          <ThirdFloorContainerBottom>
            <MainProductCard title="Kitchen mixer" price="19" img={mixer} />
            <MainProductCard title="Blenders" price="19" img={blinder} />
            <MainProductCard
              title="Home appliance"
              price="19"
              img={appliance}
            />
            <MainProductCard title="Coffee maker" price="19" img={tree} />
          </ThirdFloorContainerBottom>
        </ThirdFloorContainer>
      </ThirdFloorWrapper>
    </Container>
  );
}

export default ThirdFloor;
