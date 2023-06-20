import React from "react";
import { TimeCeilNumber, TimeCeilUnit, TimeCeilWrapper } from "./style";

function TimeCeil({ number, unit }) {
  return (
    <TimeCeilWrapper>
      <TimeCeilNumber>{number}</TimeCeilNumber>
      <TimeCeilUnit>{unit}</TimeCeilUnit>
    </TimeCeilWrapper>
  );
}

export default TimeCeil;
