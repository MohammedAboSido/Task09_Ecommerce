import React from "react";
import { SelectInput, SelectTitle, SelectWrapper } from "./style";

function Select({ type, title, id, name }) {
  return (
    <SelectWrapper>
      {type && <SelectInput type={type} id={id} name={name} />}
      <SelectTitle htmlFor={id}>{title}</SelectTitle>
    </SelectWrapper>
  );
}
export default Select;
