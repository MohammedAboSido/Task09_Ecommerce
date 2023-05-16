import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { InputFelid, InputWrapper } from "./style";
function Input({ placeholder, value, name, id, type }) {
  const [visibility, setVisibility] = useState(false);
  const visibilityHandler = () => {
    setVisibility((prev) => !prev);
  };
  return (
    <>
      <InputWrapper>
        <InputFelid
          placeholder={placeholder}
          value={value}
          type={type === "password" && visibility ? "text" : type}
          name={name}
          id={id}
        />

        {type === "password" &&
          (visibility ? (
            <VisibilityOffIcon
              onClick={visibilityHandler}
              className="passwordIcon"
            />
          ) : (
            <VisibilityIcon
              onClick={visibilityHandler}
              className="passwordIcon"
            />
          ))}
      </InputWrapper>
    </>
  );
}

export default Input;
