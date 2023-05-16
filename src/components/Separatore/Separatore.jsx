import React from "react";
import { SeparatoreTitle, SeparatoreWrapper } from "./style";

function Separatore({ title }) {
  return (
    <SeparatoreWrapper>
      {title && <SeparatoreTitle>{title}</SeparatoreTitle>}
    </SeparatoreWrapper>
  );
}

export default Separatore;
