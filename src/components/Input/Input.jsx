import React from "react";
import { InputFelid, InputLabel, InputWrapper } from "./style";

function Input({ label, placeholder, value, name, id, type }) {
  return (
    <>
      <InputWrapper>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <InputFelid
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          id={id}
        />
      </InputWrapper>
    </>
  );
}

export default Input;
