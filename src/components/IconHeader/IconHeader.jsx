import React from "react";
import { IconHeaderImg, IconHeaderTitle, IconHeaderWrapper } from "./style";

function IconHeader({ img, title }) {
  return (
    <IconHeaderWrapper>
      <IconHeaderImg src={img} />
      <IconHeaderTitle>{title}</IconHeaderTitle>
    </IconHeaderWrapper>
  );
}

export default IconHeader;
