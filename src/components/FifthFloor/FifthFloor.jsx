import React from "react";
import { Container } from "./../../global/components";
import Quote from "./../Quote/Quote";
import {
  FifthFloorContainer,
  FifthFloorDetails,
  FifthFloorTitle,
  FifthFloorWrapper,
} from "./style";

function FifthFloor() {
  return (
    <Container>
      <FifthFloorWrapper>
        <FifthFloorContainer>
          <FifthFloorTitle>
            An easy way to send requests to all suppliers
          </FifthFloorTitle>
          <FifthFloorDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </FifthFloorDetails>
        </FifthFloorContainer>
        <Quote />
      </FifthFloorWrapper>
    </Container>
  );
}

export default FifthFloor;
