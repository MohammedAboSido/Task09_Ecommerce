import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import React, { useState } from "react";
import { ThemeButtonWrapper } from "./style";
function ThemeButton() {
  const [theme, setTheme] = useState(true);
  const toggleHandler = () => {
    setTheme(!theme);
  };
  return (
    <ThemeButtonWrapper onClick={toggleHandler}>
      {theme ? <NightlightIcon /> : <LightModeIcon />}
    </ThemeButtonWrapper>
  );
}

export default ThemeButton;
