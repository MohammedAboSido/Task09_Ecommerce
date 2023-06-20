import React from "react";
import TimeCeil from "./../TimeCeil/TimeCeil";
import {
  OffersDetails,
  OffersTimeCeils,
  OffersTitle,
  OffersWrapper,
} from "./style";

function Offers() {
  return (
    <OffersWrapper>
      <OffersTitle>Deals and offers</OffersTitle>
      <OffersDetails>Hygiene equipments</OffersDetails>
      <OffersTimeCeils>
        <TimeCeil number="04" unit="Days" />
        <TimeCeil number="13" unit="Hour" />
        <TimeCeil number="34" unit="Min" />
        <TimeCeil number="56" unit="Sec" />
      </OffersTimeCeils>
    </OffersWrapper>
  );
}

export default Offers;
