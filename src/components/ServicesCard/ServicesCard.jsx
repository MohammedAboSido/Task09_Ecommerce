import React from "react";
import {
  ServicesCardContainer,
  ServicesCardIcon,
  ServicesCardIconContainer,
  ServicesCardImg,
  ServicesCardTitle,
  ServicesCardWrapper,
} from "./style";

function ServicesCard({ img, title, icon }) {
  return (
    <ServicesCardWrapper>
      <ServicesCardContainer>
        <ServicesCardImg src={img} />
      </ServicesCardContainer>
      <ServicesCardIconContainer>
        <ServicesCardIcon>{icon}</ServicesCardIcon>
        <ServicesCardTitle>{title}</ServicesCardTitle>
      </ServicesCardIconContainer>
    </ServicesCardWrapper>
  );
}

export default ServicesCard;
