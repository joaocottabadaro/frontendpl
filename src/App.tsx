import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import HomePage from "./modules/HomePage/HomePage";
import { GlobalStyles } from "./styles/global-styles";
import { theme, MuiTheme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyles />
          <HomePage />
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
