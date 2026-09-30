import CssBaseline from "@mui/material/CssBaseline";
import { Board } from "./pages/Board";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Board />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
