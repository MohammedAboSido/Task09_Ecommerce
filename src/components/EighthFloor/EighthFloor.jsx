import React from "react";
import flag1 from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import flag3 from "../../assets/images/flag3.png";
import flag4 from "../../assets/images/flag4.png";
import flag5 from "../../assets/images/flag5.png";
import flag6 from "../../assets/images/flag6.png";
import flag7 from "../../assets/images/flag7.png";
import flag8 from "../../assets/images/flag8.png";
import usFlag from "../../assets/images/us-flag.png";
import Region from "../../components/Region/Region";
import { Container } from "./../../global/components";
import {
  EighthFloorRegions,
  EighthFloorTitle,
  EighthFloorWrapper,
} from "./style";

function EighthFloor() {
  return (
    <Container>
      <EighthFloorWrapper>
        <EighthFloorTitle>Suppliers by region</EighthFloorTitle>
        <EighthFloorRegions>
          <Region name="Arabic Emirates" details="shopname.ae" img={flag1} />
          <Region name="Australia" details="shopname.ae" img={flag2} />
          <Region name="United States" details="shopname.ae" img={usFlag} />
          <Region name="Russia" details="shopname.ru" img={flag8} />
          <Region name="Italy" details="shopname.it" img={flag7} />
          <Region name="Denmark" details="denmark.com.dk" img={flag4} />
          <Region name="France" details="shopname.com.fr" img={flag5} />
          <Region name="Arabic Emirates" details="shopname.ae" img={flag1} />
          <Region name="China" details="shopname.ae" img={flag3} />
          <Region name="Great Britain" details="shopname.ae" img={flag6} />
        </EighthFloorRegions>
      </EighthFloorWrapper>
    </Container>
  );
}

export default EighthFloor;
