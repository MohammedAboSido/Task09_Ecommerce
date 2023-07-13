import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { darkTheme, lightTheme } from "../../global/themes";
import { ThemeButtonWrapper } from "./style";

function ThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);
  localStorage.setItem("theme", theme.theme);
  const toggleHandler = () => {
    setTheme((prev) => (prev.theme === "dark" ? lightTheme : darkTheme));
  };
  return (
    <ThemeButtonWrapper onClick={toggleHandler}>
      {theme.theme === "dark" ? <LightModeIcon /> : <NightlightIcon />}
    </ThemeButtonWrapper>
  );
}

export default ThemeButton;
