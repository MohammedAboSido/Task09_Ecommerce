import { Global, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Home from "./components/Home";
import { ThemeContext } from "./contexts/themeContext";
import globalStyle from "./global/globalStyle";
import { darkTheme, lightTheme } from "./global/themes";

function App() {
  const mood = localStorage.getItem("theme");
  const [theme, setTheme] = useState(mood === "dark" ? darkTheme : lightTheme);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Global styles={globalStyle} />
          <Home />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
