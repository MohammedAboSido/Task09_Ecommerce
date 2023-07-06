import React from "react";
import {
  FeatureCardContainer,
  FeatureCardDescription,
  FeatureCardIcon,
  FeatureCardTitle,
  FeatureCardWrapper,
} from "./style";

function FeatureCard({ icon, title, description }) {
  return (
    <FeatureCardWrapper>
      <FeatureCardIcon>{icon}</FeatureCardIcon>
      <FeatureCardContainer>
        <FeatureCardTitle>{title}</FeatureCardTitle>
        <FeatureCardDescription>{description}</FeatureCardDescription>
      </FeatureCardContainer>
    </FeatureCardWrapper>
  );
}

export default FeatureCard;
