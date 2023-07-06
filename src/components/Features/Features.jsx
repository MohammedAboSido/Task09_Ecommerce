import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import MessageIcon from "@mui/icons-material/Message";
import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { FeaturesWrapper } from "./style";
function Features() {
  return (
    <FeaturesWrapper>
      <FeatureCard
        icon={<LockIcon />}
        title="Secure payment"
        description="Have you ever finally just"
      />
      <FeatureCard
        icon={<MessageIcon />}
        title="Customer support"
        description="Have you ever finally just"
      />
      <FeatureCard
        icon={<LocalShippingIcon />}
        title="Free delivery"
        description="Have you ever finally just"
      />
    </FeaturesWrapper>
  );
}

export default Features;
