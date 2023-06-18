import React from "react";
import { OfferCardWrapper } from "./style";

function OfferCard({ title, textColor, bgColor }) {
  return (
    <OfferCardWrapper textColor={textColor} bgColor={bgColor}>
      {title}
    </OfferCardWrapper>
  );
}

export default OfferCard;
