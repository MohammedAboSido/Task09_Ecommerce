import React from "react";
import { SecondaryButtonImg, SecondaryButtonWrapper } from "./style";
function SecondaryButton({ img, title, brand }) {
  return (
    <SecondaryButtonWrapper brand={brand}>
      <SecondaryButtonImg src={img} />
      {title}
    </SecondaryButtonWrapper>
  );
}

export default SecondaryButton;
