import { Global, ThemeProvider } from "@emotion/react";
import Home from "./components/Home";
import { Container } from "./global/components";
import globalStyle from "./global/globalStyle";
import { lightTheme } from "./global/themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Global styles={globalStyle} />
        <Container>
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
